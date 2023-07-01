const palindromes = function (string) {
    string = string.replace(/,/g, '');
    string = string.replace(/\./g, '');
    string = string.replace(/\!/g, '');
    string = string.replace(/\.?/g, '');
    string = string.replace(/\s+/g, '');
    string = string.toLowerCase();

    let newString = '';

    newString = string.split('').reverse().join('');

    if(string === newString)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;

// palindromes("racecar");
