const add = function() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
	return (sum);
};

const subtract = function() {
	let difference = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    difference -= arguments[i]
  }
  return (difference);
};

const sum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      return ('ERROR')
    }
  }
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return (sum);
};

const multiply = function(array) {
  let product = 1
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      return ('ERROR')
    }
  }
  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }
  
  return (product);
};

const power = function(num1, num2) {
  if ((typeof num1 !== "number") || (typeof num2 !== "number"))
    return ('ERROR');
	return (Math.pow(num1, num2))
};

const factorial = function(num) {
  let num_Factorial = 1;
  if (typeof num !== "number")
    return ('ERROR');
	if (num === 0 || num === 1)
    return (1);
  for (let i = num; i > 0; i--) {
    num_Factorial *= i;
  }
  return (num_Factorial);
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
