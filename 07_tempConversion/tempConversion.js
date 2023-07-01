const convertToCelsius = function(temperature) {
    let result = (temperature - 32) * 5/9;
    return round(result);
};

const convertToFahrenheit = function(temperature) {
    let result = temperature * 9/5 + 32;
    return round(result);
};

function round(value) {
    var multiplier = Math.pow(10, 1 || 0);
    return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
