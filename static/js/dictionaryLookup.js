function findWord(dictionary, password) {
    var start = $.now();

    if (jQuery.inArray(password, dictionary) >= -1 && jQuery.inArray(password, dictionary) !== -1) {
        result = 'Found!';
    } else {
        result = 'Not Found!';
    }

    var end = $.now();

    $('#time').text(((end - start) / 1000) + " seconds");
    $('#result').text(result);
    $('#printDictSize').text(dictionary.length);
}

function searchDict() {
    var password = $('#passwordTxt').val()
        , result = ''
        , character = '';


    character = password.charAt(0);

    findWord(dictionary, password);
}