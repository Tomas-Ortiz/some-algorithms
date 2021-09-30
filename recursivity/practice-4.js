var assert = require('assert');

/*
n = 22
result = 4

n = 22 | return 2 + sumOfDigits(2) --> 2 + 2 = 4
    n = 2  |  return 2;


n = 123
result = 6

n = 123 | return 3 + sumOfDigits(12) --> 3 + 3 = 6
    n = 12  |  return 2 + sumOfDigits(1) --> 2 + 1 = 3
        n = 1   |     return 1

n = 422
result = 8

n = 422 | return 2 + sumOfDigits(42) --> 2 + 6 = 8
    n = 42  |  return 2 + sumOfDigits(4) --> 2 + 4 = 6
        n = 4   |     return 4
*/

var sumOfDigits = (n) => {
  if (n < 10) return n;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
};

console.log(sumOfDigits(422));

assert.equal(sumOfDigits(10), 1);
assert.equal(sumOfDigits(25), 7);
assert.equal(sumOfDigits(123), 6);
assert.equal(sumOfDigits(422), 8);
