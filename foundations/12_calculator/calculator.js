const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, current) => total * current);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  let total = 1;

  if (num === 0) return 1;

  for (let i = 0; i < num; i++) {
    total *= (num - i);
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
