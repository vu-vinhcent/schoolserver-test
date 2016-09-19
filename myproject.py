from flask import Flask, render_template, request, Response, make_response
from bs4 import BeautifulSoup
import requests
import json
import pdfkit
import time

PLACES = [
        {'state' : 'Alabama', 'city' :'Phenix-City'},
        {'state' : 'Georgia', 'city' :'Columbus'}
]

def search_person(first, last, state, city):
    url = 'http://www.spokeo.com/' + first + '-' + last + '/' + state + '/' + city
    r = requests.get(url)
    return r

def get_data(data):
    data = json.loads(data)
    info = data['people']
    results = []
    for item in info:
        d = {'name'      : item['name'],      'dob'       : item['dob'],
             'age'       : item['age'],       'locations' : item['locations'],
             'longitude' : item['longitude'], 'includes'  : item['includes'],
             'relatives' : item['relatives'], 'latitude'  : item['latitude'],
             'aliases'   : item['aliases'] }
        results.append(d)
    return results

def query_person(first, last):
    for place in PLACES:
        r = search_person(first, last, place['state'], place['city'])
        soup = BeautifulSoup(r.text)
        results = []
        for script in soup.find_all('script'):
            if 'var search = {' in script.text:
                script_string = str(script)
                results += (get_data(script_string[script_string.index('{'): -10]))
        return results

application = Flask(__name__)

@application.route('/', methods=["GET"])
def index():
    return render_template('index.html')

@application.route('/passwords', methods=["GET"])
def passwords():
    return render_template('passwords.html')

@application.route('/social_engineering', methods=["POST", "GET"])
def social_eng():
    if request.method == "GET":
		return render_template('socialeng.html')
    if request.method == "POST":
        first = request.form["firstname"].split()[0].capitalize()
        last = request.form["lastname"].split()[0].capitalize()
        return render_template('socialengresults.html', data=query_person(first, last))

@application.route('/mobile', methods=["GET"])
def mobile():
    return render_template('mobile.html')

@application.route('/browser', methods=["GET"])
def browser():
    return render_template('browser.html')

@application.route('/malware', methods=["GET"])
def malware():
    return render_template('malware.html')

@application.route('/passwords_quiz', methods=["GET"])
def passwords_quiz():
    return render_template('passwords-quiz.html')

@application.route('/social_engineering_quiz', methods=["GET"])
def social_engineering_quiz():
    return render_template('socialengineering-quiz.html')

@application.route('/mobile_quiz', methods=["GET"])
def mobile_quiz():
    return render_template('mobile-quiz.html')

@application.route('/browser_quiz', methods=["GET"])
def browser_quiz():
    return render_template('browser-quiz.html')

@application.route('/malware_quiz', methods=["GET"])
def malware_quiz():
    return render_template('malware-quiz.html')

@application.route('/get_info', methods=["GET"])
def get_info():
    return render_template('get-info.html')

@application.route('/completion', methods=["GET", "POST"])
def completion():

    options = {
        'page-size': 'Legal',
        'margin-top': '0.75in',
        'margin-right': '0.75in',
        'margin-bottom': '0.75in',
        'margin-left': '0.75in',
        'encoding': "UTF-8",
        'no-outline': None
    }
    config = pdfkit.configuration(wkhtmltopdf='/usr/local/bin/wkhtmltopdf')
    rendered = render_template("completion.html", data={'name' : request.form['name'], 'date' : time.strftime("%d/%m/%Y")})
    pdf = pdfkit.from_string(rendered, False, configuration=config, options=options)
    response = make_response(pdf)
    response.headers['Content-Type'] = 'application/pdf'
    response.headers['Content-Disposition'] = 'inline; filename=output.pdf'
    return response

if __name__ == "__main__":
    application.run(host='0.0.0.0', debug=True)
