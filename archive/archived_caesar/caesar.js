const caesar = function(string, shiftFactor) {
    let newString = "";

    for(let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        console.log("charCode:" + charCode + "," + string[i]);
        let newCharCode = charCode + shiftFactor;
        console.log("newCharCode:" + newCharCode + "," + String.fromCharCode(newCharCode));

        if((charCode >= 65 && charCode <= 90) && newCharCode > 90){
            newCharCode = 64 + (newCharCode - 90);
        }
        if((charCode >= 65 && charCode <= 90) && newCharCode < 65){
            newCharCode = 91 - (65 - newCharCode);
        }

        if(charCode != 32 && charCode != 33 && charCode != 39 && charCode != 44 && charCode != 46) {
            newString += String.fromCharCode(newCharCode);

        }
        else
            newString += string[i];
    }

    return newString;

};



// Do not edit below this line
module.exports = caesar;
