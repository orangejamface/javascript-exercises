const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  for( each of array) {
    sum += each;
  }
  return sum;
};

const multiply = function(array) {
  let sum = array.reduce((total,each) => {
    return total * each;
  },1);
  return sum;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
	let sum = 1;
  for (i=a; i>0; i--) {
    sum *= i;
  }
  return sum;
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
