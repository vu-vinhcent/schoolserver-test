function checkProgress() {
    console.log(document.cookie);

    var pDone = document.cookie.replace(/(?:(?:^|.*;\s*)p\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var seDone = document.cookie.replace(/(?:(?:^|.*;\s*)se\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var bsDone = document.cookie.replace(/(?:(?:^|.*;\s*)bs\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    var msDone = document.cookie.replace(/(?:(?:^|.*;\s*)ms\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (pDone == "true") {
        $("#p-card").toggleClass("card-success-outline");
        $("#p-title").append('<span class="green"> &#10004; </span>')
    }

    if (seDone == "true") {
        $("#se-card").toggleClass("card-success-outline");
        $("#se-title").append('<span class="green"> &#10004; </span>')
    }

    if (bsDone == "true") {
        $("#bs-card").toggleClass("card-success-outline");
        $("#bs-title").append('<span class="green"> &#10004; </span>')
    }

    if (msDone == "true") {
        $("#ms-card").toggleClass("card-success-outline");
        $("#ms-title").append('<span class="green"> &#10004; </span>')
    }
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
        document.getElementById('fake-websites-results').innerHTML = '<br/><p class="card card-block card-instruction">Correct! Notice that website 1 has "https://" as well as the padlock icon, where website 2 doesn\'t.</p>';
    } else {
        $("#q2-check").replaceWith('<span id="q2-check" class="question-space red"> &#10008; </span>');
        document.getElementById('fake-websites-results').innerHTML = '<br/><p class="card card-block card-instruction">Incorrect! Notice that website 1 has "https://" as well as the padlock icon, where website 2 doesn\'t.</p>';
    }
    document.getElementById("fake-website-image-1").src = "static/images/image1 copy.jpg";
    document.getElementById("fake-website-image-2").src = "static/images/image2 copy.jpg";
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
        var part1 = '<a id="';
        var part2 = '" class="btn btn-primary btn-lg next" href="/" role="button" onclick="checkQuestion(this)"> Start a new module! </a>';

        if ($('title').text().indexOf('Password') >= 0) {
            $('.next').replaceWith(part1 + 'p' + part2);
        }

        if ($('title').text().indexOf('Browser') >= 0) {
            $('.next').replaceWith(part1 + 'bs' + part2);
        }

        if ($('title').text().indexOf('Social') >= 0) {
            $('.next').replaceWith(part1 + 'se' + part2);
        }

        if ($('title').text().indexOf('Mobile') >= 0) {
            $('.next').replaceWith(part1 + 'ms' + part2);
        }
    } else {
        var part3 = '<a class="btn btn-primary btn-lg next" href="';
        var part4 = '" role="button"> Back to the module! </a>';

        if ($('title').text().indexOf('Password') >= 0) {
            console.log(part3 + 'passwords.html' + part4);
            $('.next').replaceWith(part3 + '/passwords' + part4);
        }

        if ($('title').text().indexOf('Browser') >= 0) {
            $('.next').replaceWith(part3 + '/browser' + part4);
        }

        if ($('title').text().indexOf('Social') >= 0) {
            $('.next').replaceWith(part3 + '/social_engineering' + part4);
        }

        if ($('title').text().indexOf('Mobile') >= 0) {
            $('.next').replaceWith(part3 + '/mobile' + part4);
        }
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

    $('#ms-button').click(function () {
        document.cookie = "ms=true; ";
    });
});