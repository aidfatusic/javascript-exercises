const repeatString = function(string, count) {
    let result = '';
    if (count < 0) {
        result = "ERROR"
    }
    for (let i = 0; i < count; i++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
