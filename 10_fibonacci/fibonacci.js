const fibonacci = function(number) {
    if(number < 0)
        return "OOPS";
        
    let a = 1, b = 0, temp;
    for(let i = 1; i < number; i++) {
        temp = a;
        a += b;
        b = temp;
    }

    return a;
};

// Do not edit below this line
module.exports = fibonacci;
