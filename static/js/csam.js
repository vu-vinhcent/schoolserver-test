function checkProgress() {
    console.log(document.cookie);

    var pDone = document.cookie.replace(/(?:(?:^|.*;\s*)p\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var seDone = document.cookie.replace(/(?:(?:^|.*;\s*)se\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var bsDone = document.cookie.replace(/(?:(?:^|.*;\s*)bs\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var mosDone = document.cookie.replace(/(?:(?:^|.*;\s*)mos\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var masDone = document.cookie.replace(/(?:(?:^|.*;\s*)mas\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (pDone == "true") {
        $("#p-card").toggleClass("card-success-outline");
        //        $("#p-title").append('<span class="green"> &#10004; </span>')
    }

    if (seDone == "true") {
        $("#se-card").toggleClass("card-success-outline");
        //        $("#se-title").append('<span class="green"> &#10004; </span>')
    }

    if (bsDone == "true") {
        $("#bs-card").toggleClass("card-success-outline");
        //        $("#bs-title").append('<span class="green"> &#10004; </span>')
    }

    if (mosDone == "true") {
        $("#mos-card").toggleClass("card-success-outline");
        //        $("#ms-title").append('<span class="green"> &#10004; </span>')
    }

    if (masDone == "true") {
        $("#mas-card").toggleClass("card-success-outline");
        //        $("#ms-title").append('<span class="green"> &#10004; </span>')
    }

    if (pDone && seDone && bsDone && mosDone && masDone) {
        $('#cert-card').css('display', 'block');
    }
}

function setHeight() {
    var greatest = $('#p-card-block').height();
    var greatest2 = $('#p-card-block > p').height();
    var greatest3 = $('#p-card-block > h4').height();
    var greatest4 = $('#p-card > img').height();
    var $cards = $('.card-block');
    var temp = 0;

    console.log(greatest);
    console.log($cards);

    $cards.each(function () {
        $(this).height(greatest);
        temp = $('h4', this).height();
        $('p', this).height((greatest2 + greatest3) - temp);
    });
}

function checkQuestion1() {
    if ($('input[name=question1]:checked').val() == 'true') {
        $("#q1-check").replaceWith('<span id="q1-check" class="question-space green"> &#10004; </span>');
        document.getElementById('email-results').innerHTML = '<br/><p class="card card-block card-instruction"> <br>Correct! Both of these emails exhibit signs of phishing.</p>';
    } else {
        $("#q1-check").replaceWith('<span id="q1-check" class="question-space red"> &#10008; </span>');
        document.getElementById('email-results').innerHTML = '<br/><p class="card card-block card-instruction">Incorrect! Both of these emails exhibit signs of phishing.</p>';
    }
}

function checkQuestion2() {
    if ($('input[name=question2]:checked').val() == 'true') {
        $("#q2-check").replaceWith('<span id="q2-check" class="question-space green"> &#10004; </span>');
        document.getElementById('fake-websites-results').innerHTML = 'Correct! Notice that website 1 has "https://" as well as the padlock icon, where website 2 doesn\'t.';
    } else {
        $("#q2-check").replaceWith('<span id="q2-check" class="question-space red"> &#10008; </span>');
        document.getElementById('fake-websites-results').innerHTML = 'Incorrect! Notice that website 1 has "https://" as well as the padlock icon, where website 2 doesn\'t.';
    }

    $(window).scrollTo($('#fakesites'), {
        duration: 600,
        offset: -100
    });

    $('#fake-web-exer').slideUp();

    $('#web-results').fadeIn();
}

function checkQuestion3() {
    if ($('input[name=question3]:checked').val() == 'true') {
        $("#q3-check").replaceWith('<span id="q3-check" class="question-space green"> &#10004; </span>');
        document.getElementById('phishing-results').innerHTML = '<br/><p class="card card-block card-instruction">Correct! It is possible for an attacker to find your name as well as some details about your account. Personal information like this can be used to craft convincing spearphishing emails. The link in this email may lead to a site that is designed to steal your credentials.</p>';
    } else {
        $("#q3-check").replaceWith('<span id="q3-check" class="question-space red"> &#10008; </span>');
        document.getElementById('phishing-results').innerHTML = '<br/><p class="card card-block card-instruction">Incorrect! It is possible for an attacker to find your name as well as some details about your account. Personal information like this can be used to craft convincing spearphishing emails. The link in this email may lead to a site that is designed to steal your credentials.</p>';
    }
    document.getElementById('spearphishing-image').innerHTML = '<img style="margin: auto; display: block;" src="/static/images/phishing-email copy.png">';
}

function changeSrc(element) {
    var next = '';
    var imgNum = element.src.split('/');

    if (element.id == 'chrome-extension-img') {
        if (imgNum[6] == 'step1.png') {
            next = 'step2.png';
        } else if (imgNum[6] == 'step2.png') {
            next = 'step3.png';
        } else if (imgNum[6] == 'step3.png') {
            next = 'step1.png';
        }

        imgNum[6]
        element.src = 'static/images/extensions-chrome/' + next;
    }

    if (element.id == 'firefox-extension-img') {
        if (imgNum[6] == 'step1.png') {
            next = 'step2.png';
        } else if (imgNum[6] == 'step2.png') {
            next = 'step3.png';
        } else if (imgNum[6] == 'step3.png') {
            next = 'step1.png';
        }

        imgNum[6]
        element.src = 'static/images/extensions-firefox/' + next;
    }

    if (element.id == 'ie-extension-img') {
        if (imgNum[6] == 'step1.png') {
            next = 'step2.png';
        } else if (imgNum[6] == 'step2.png') {
            next = 'step3.png';
        } else if (imgNum[6] == 'step3.png') {
            next = 'step4.png';
        } else if (imgNum[6] == 'step4.png') {
            next = 'step1.png';
        }

        imgNum[6]
        element.src = 'static/images/extensions-ie/' + next;
    }

    if (element.id == 'chrome-popups-img') {
        if (imgNum[6] == 'step1.png') {
            next = 'step2.png';
        } else if (imgNum[6] == 'step2.png') {
            next = 'step3.png';
        } else if (imgNum[6] == 'step3.png') {
            next = 'step4.png';
        } else if (imgNum[6] == 'step4.png') {
            next = 'step5.png';
        } else if (imgNum[6] == 'step5.png') {
            next = 'step1.png';
        }

        imgNum[6]
        element.src = 'static/images/popups-chrome/' + next;
    }

    if (element.id == 'firefox-popups-img') {
        if (imgNum[6] == 'step1.png') {
            next = 'step2.png';
        } else if (imgNum[6] == 'step2.png') {
            next = 'step3.png';
        } else if (imgNum[6] == 'step3.png') {
            next = 'step4.png';
        } else if (imgNum[6] == 'step4.png') {
            next = 'step1.png';
        }

        imgNum[6]
        element.src = 'static/images/popups-firefox/' + next;
    }

    if (element.id == 'ie-popups-img') {
        if (imgNum[6] == 'step1.png') {
            next = 'step2.png';
        } else if (imgNum[6] == 'step2.png') {
            next = 'step3.png';
        } else if (imgNum[6] == 'step3.png') {
            next = 'step4.png';
        } else if (imgNum[6] == 'step4.png') {
            next = 'step1.png';
        }

        imgNum[6]
        element.src = 'static/images/popups-ie/' + next;
    }
}

function checkQuiz() {
    var numCorrect = 0;

    if ($('input[name=question1]:checked').val() == 'true') {
        $("#q1-check").replaceWith('<span id="q1-check" class="question-space green"> &#10004; </span>');
        numCorrect++;
    } else {
        $("#q1-check").replaceWith('<span id="q1-check" class="question-space red"> &#10008; </span>');
    }

    if ($('input[name=question2]:checked').val() == 'true') {
        $("#q2-check").replaceWith('<span id="q2-check" class="question-space green"> &#10004; </span>');
        numCorrect++;
    } else {
        $("#q2-check").replaceWith('<span id="q2-check" class="question-space red"> &#10008; </span>');
    }

    if (numCorrect == 2) {
        $('.btn').removeClass('disabled');
    }
}

function checkQuestion(element) {
    document.cookie = element.id + "=true;";
}

function moveSideNav() {
    var $fixedElement = $('#sidebar');
    var $contentContainer = $("#content-container");
    var vTop = $fixedElement.offset().top - parseFloat($fixedElement.css('margin-top').replace(/auto/, 0));
    var y = $(this).scrollTop() * 2;

    if (y >= vTop) {
        $fixedElement.addClass("fixed");
        $fixedElement.css('width', $contentContainer.width() * .15);
    } else {
        $fixedElement.removeClass("fixed");
    }
}

function fadeBG() {
    if ($('#link-two').hasClass('active') || $('#link-four').hasClass('active')) {
        $('#bg').fadeIn();
        $('.nav-item > a').addClass('inverse');
    } else {
        $('#bg').fadeOut();
        $('.nav-item > a').removeClass('inverse');
    }
}

$(document).ready(function () {
    //    setHeight();
    //
    //    if ($('title').text().indexOf('Cyber Security Awareness Module') <= 0) {
    //        $(window).resize(function () {
    //            setheight();
    //        });
    //    }

    $('#sidebar').css('width', $("#content-container").width() * .15);

    if ($('title').text().indexOf('Quiz') <= 0 && $('title').text().indexOf('Module') <= 0) {
        moveSideNav();
    }

    if ($('title').text().indexOf('Quiz') <= 0 && $('title').text().indexOf('Module') <= 0) {
        $(window).scroll(function () {
            moveSideNav();
            fadeBG();
        });
    }

    $(window).resize(function () {
        $('#sidebar').css('width', $("#content-container").width() * .15);
    });

    $('#image1').click(function () {
        $(this).fadeToggle();
    });

    $('#image2').click(function () {
        $('#image1').fadeToggle();
    })

    $('#p-button').click(function () {
        document.cookie = "p=true; ";
    });

    $('#se-button').click(function () {
        document.cookie = "se=true; ";
    });

    $('#bs-button').click(function () {
        document.cookie = "bs=true; ";
    });

    $('#mos-button').click(function () {
        document.cookie = "mos=true; ";
    });

    $('#mas-button').click(function () {
        document.cookie = "mas=true; ";
    });
});