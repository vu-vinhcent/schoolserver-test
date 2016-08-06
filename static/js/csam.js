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

$(document).ready(function () {
    $.ajax({
        url: 'http://d2hqmzmqawf6yu.cloudfront.net/' + 'basicDictionary.txt'
        , async: true
        , cache: true
        , dataType: 'text'
        , success: function (data) {
            dict = data;

            dictionary = dict.split('\n').sort();
        }
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
        document.cookie = "ms=true"; expires=31536e3;
    });
});
