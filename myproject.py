from flask import Flask, render_template, request, Response
from bs4 import BeautifulSoup
import requests

def get_relatives(soup):
    names = []
    for i in soup.findAll("div", {"data-react-class":"LocationHistory"}):
        for link in i.findAll('a'):
            if link.string != None and link.string != 'VIEW DETAILS':
                names.append(str(link.string))
    return names

def get_summary(soup):
    info = []
    result = soup.find("div", {"class":"profile_summary_subtitle"})
    result = soup.find_all('span', {'class' : 'brief_subtitle'})
    for r in result:
        info.append(r.text)
    return info

def search_person(first, last, state, city):
    url = 'http://www.spokeo.com/' + first + '-' + last + '/' + state + '/' + city
    r = requests.get(url)
    print '+++Requesting: ' + url
    return r

def stream_template(template_name, **context):
    application.update_template_context(context)
    t = application.jinja_env.get_template(template_name)
    rv = t.stream(context)
    rv.enable_buffering(5)
    return rv

def query_person(first, last):
    places = [['Georgia', 'Columbus'], ['Alabama', 'Phenix-City']]
    for place in places:
        r = search_person(first, last, place[0], place[1])
        if r.status_code != 200:
            print '+++Bad Response'
            exit()
        profiles = []
        soup = BeautifulSoup(r.text)
        for a in soup.findAll('a', href=True):
            #since this gets all the links from the page, we need a way to make
            #sure that it is a link to a profile and not a random page linked
            if first in a['href'] and place[0] in a['href']:
                profile = 'http://www.spokeo.com' + a['href']
                profiles.append(profile)
                print '+++Profile added: ' + profile
        for profile in profiles:
            r = requests.get(profile)
            html = BeautifulSoup(r.text)
            relatives = get_relatives(html)
            basic_info = get_summary(html)
            results = {'relatives' : relatives, 'basic_info' : basic_info}
            yield results

application = Flask(__name__)

@application.route('/', methods=["POST", "GET"])
def search():
	if request.method == "GET":
		return render_template('search.html')
	if request.method == "POST":
		first = request.form["firstname"].split()[0].capitalize()
		last = request.form["lastname"].split()[0].capitalize()
		return Response(stream_template('search.html', data=query_person(first, last)))

if __name__ == "__main__":
    application.run(host='0.0.0.0', debug=True)

