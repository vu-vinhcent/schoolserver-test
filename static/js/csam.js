function delete_cookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function checkProgress() {
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

function checkPW() {
    if ($('input[name=question1]:checked').val() == 'true') {
        $("#q1-check").replaceWith('<span id="q1-check" class="question-space green"> &#10004; </span>');
    } else {
        $("#q1-check").replaceWith('<span id="q1-check" class="question-space red"> &#10008; </span>');
    }
    
    if ($('input[name=question2]:checked').val() == 'true') {
        $("#q2-check").replaceWith('<span id="q2-check" class="question-space green"> &#10004; </span>');
    } else {
        $("#q2-check").replaceWith('<span id="q2-check" class="question-space red"> &#10008; </span>');
    }
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

$(document).ready(function () {
    $.ajax({
        url: 'http://d2hqmzmqawf6yu.cloudfront.net/' + 'basicDictionary.txt'
        , async: true
        , cache: true
        , dataType: 'text'
        , success: function (data) {
            dict = data;

            dictionaryAttack = dict.split('\n');
        }
    });
    
    $('#sidebar').css('width', $("#content-container").width() * .15);
    
    moveSideNav();
    
    $(window).scroll(function () {
        moveSideNav();
    });
    
    $(window).resize(function () {
        $('#sidebar').css('width', $("#content-container").width() * .15);
    });

    $(".email-hover").click(function () {
        $(this).toggleClass('email-selected');
    });
    
    $('#clickClick').click(function () {
        $('[data-toggle="popover"]').popover('show').toggleClass('email-selected');
    });
    
    $('#image1').click(function () {
        $(this).fadeToggle(); 
    });
    
    $('#image2').click(function () {
        $('#image1').fadeToggle();
    })
    
    $('#p-button').click(function () {
        document.cookie = "p=true";
    });
    
    $('#se-button').click(function () {
        document.cookie = "se=true";
    });
    
    $('#bs-button').click(function () {
        document.cookie = "bs=true";
    });
    
    $('#ms-button').click(function () {
        document.cookie = "ms=true";
    });
});
