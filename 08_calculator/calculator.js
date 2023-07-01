const add = function(numberOne, numberTwo) {
  return numberOne + numberTwo;
};

const subtract = function(numberOne, numberTwo) {
	return numberOne - numberTwo;
};

const sum = function(array) {
  let result = 0;
  for (const element of array) {
    result += element;
  }
  return result;
};

const multiply = function(array) {
  let result = 1;
  for (const element of array) {
    result *= element;
  }
  return result;
};

const power = function(base, exponent) {
	let result = 1;
  for(let i = 1; i <= exponent; i++) {
    result *= base;
  }

  return result;
};

const factorial = function(number) {
  let result = 1;
	for(let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
