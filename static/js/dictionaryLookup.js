function findWord(dictionary, password) {
    var start = $.now();

    if (jQuery.inArray(password, dictionary) > -1) {
        result = 'Found!';
    } else {
        result = 'Not Found!';
    }

    var end = $.now();

    $('#time').text(((end - start) / 1000) + " seconds");
    $('#result').text(result);
    $('#printDictSize').text(dictionary.length);
}
