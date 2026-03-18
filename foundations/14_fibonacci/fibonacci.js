const fibonacci = function (n) {
  if (n < 0) return "OOPS";

  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    a = b + a;

    [a, b] = [b, a];
  }

  return a;
};

// Do not edit below this line
module.exports = fibonacci;
