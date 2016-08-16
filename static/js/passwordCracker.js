function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function convert(timeToCrack, units) {
    if (timeToCrack >= 31104000) {
        timeToCrack = timeToCrack / 31104000;
        units = 'year(s)';
    }
    else if (timeToCrack >= 2592000) {
        timeToCrack = timeToCrack / 2592000;
        units = 'month(s)';
    }
    else if (timeToCrack >= 86400) {
        timeToCrack = timeToCrack / 86400;
        units = 'day(s)';
    }
    else if (timeToCrack >= 360) {
        timeToCrack = timeToCrack / 360;
        units = 'hour(s)';
    }
    else if (timeToCrack >= 60) {
        timeToCrack = timeToCrack / 60;
        units = 'minute(s)';
    }
    if (timeToCrack < 1) {
        timeToCrack = timeToCrack.toFixed(7);
    }
    else {
        timeToCrack = numberWithCommas(Math.round(timeToCrack));
    }
    timeToCrack = timeToCrack + ' ' + units;
    return timeToCrack;
}

function searchDict() {
    var password = $('#passwordTxt').val()
        , result = ''
        , character = ''
        , i = 0;
    
    character = password.charAt(0);
    
    timeTaken = findWord(dictionaryAttack, password);
}
    
function guessPassword() {
    var password = $('#passwordTxt').val()
        , i = 0
        , searchSpace = 0
        , hasSymbol = false
        , hasNumber = false
        , hasUpper = false
        , hasLower = false
        , character = password.charAt(i)
        , allCombinations = 0
        , timeToCrackOffline = 0
        , units = 'second(s)'
        , rateOffline = 6000000
        , allCombinations = 0;
    
    // If there's no password, set everything to 0.
    // Password isn't null, but an empty string?
    if (password == '') {
        // Really need to just make a list for this...
        // Or maybe add a class to all of these?
        document.getElementById('possibleCharacters').innerHTML = '&nbsp;';
        document.getElementById('searchSpace').innerHTML = '';
        document.getElementById('has-symbol').innerHTML = '';
        document.getElementById('has-digit').innerHTML = '';
        document.getElementById('has-lower').innerHTML = '';
        document.getElementById('has-upper').innerHTML = '';
        document.getElementById('has-eight').innerHTML = '';
        document.getElementById('offline').innerHTML = '';
        document.getElementById('rate').innerHTML = '';
        document.getElementById('printDictSize').innerHTML = '';
        document.getElementById('result').innerHTML = '';
    }
    
    else {
        // Determines what the password has in it.
        for (i; i < password.length; i++) {
            console.log(password);
            if (/[@~`!#$%\^&*+=\-\[\]\\';,/{}|\\": <>\?]/.test(password)) {
                hasSymbol = true;
            }
            character = password.charAt(i);
            if (!isNaN(character * 2) && character != ' ') {
                hasNumber = true;
            }
            if (character == character.toUpperCase() && character != ' ') {
                hasUpper = true;
            }
            if (character == character.toLowerCase() && character != ' ') {
                hasLower = true;
            }
        }
        // Definitely need to do something about below...
        var temp = document.getElementById('has-symbol');
        if (hasSymbol == true) {
            searchSpace += 33;
            temp.innerHTML = '&#10004;';
            temp.className = 'text-xs-center green';
        }
        else {
            temp.innerHTML = '&#10008;';
            temp.className = 'text-xs-center red';
        }
        temp = document.getElementById('has-lower');
        if (hasLower == true) {
            searchSpace += 26;
            temp.innerHTML = '&#10004;';
            temp.className = 'text-xs-center green';
        }
        else {
            temp.innerHTML = '&#10008;';
            temp.className = 'text-xs-center red';
        }
        temp = document.getElementById('has-upper');
        if (hasUpper == true) {
            searchSpace += 26;
            temp.innerHTML = '&#10004;';
            temp.className = 'text-xs-center green';
        }
        else {
            temp.innerHTML = '&#10008;';
            temp.className = 'text-xs-center red';
        }
        temp = document.getElementById('has-digit');
        if (hasNumber == true) {
            searchSpace += 10;
            temp.innerHTML = '&#10004;';
            temp.className = 'text-xs-center green';
        }
        else {
            temp.innerHTML = '&#10008;';
            temp.className = 'text-xs-center red';
        }
        temp = document.getElementById('has-eight');
        if (password.length >= 8) {
            temp.innerHTML = '&#10004;';
            temp.className = 'text-xs-center green';
        }
        else {
            temp.innerHTML = '&#10008;';
            temp.className = 'text-xs-center red';
        }
        
        allCombinations = Math.pow(searchSpace, password.length);
        
        // This is in seconds already.
        // Also assumes worst case.
        timeToCrackOffline = Math.pow(searchSpace, password.length) / rateOffline;
        
        document.getElementById('possibleCharacters').innerHTML = searchSpace;
        document.getElementById('searchSpace').innerHTML = numberWithCommas(allCombinations);
        document.getElementById('rate').innerHTML = numberWithCommas(rateOffline);
        document.getElementById('offline').innerHTML = convert(timeToCrackOffline, units);
    }
}

function findWord(dictionary, password) {
    var start = $.now()
        , end = 0
        , timeTaken = 0;
    
    if (jQuery.inArray(password, dictionary) >= -1 && jQuery.inArray(password, dictionary) !== -1) {
        result = 'Found!';
    }
    else {
        result = 'Not Found!';
    }
    
    end = $.now();
    timeTaken = ((end - start) / 1000);
    
    $('#time').text(timeTaken + " seconds");
    $('#result').text(result);
    $('#printDictSize').text(dictionary.length);
    
    return timeTaken;
}