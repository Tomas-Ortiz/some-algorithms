var assert = require('assert');

// Power of a number

/*
base = 2 | exp = 3

Result = 8
    2 * power(2, 2) --> 2 * 4 = 8
        2 * power(2, 1) --> 2 * 2 = 4
            2 * power(2, 0) --> 2 * 1 = 2

base = 2 | exp = -3

Result = 0.125
    power(2, -2) / 2 --> 0.25 / 2 = 0.125
        power(2, -1) / 2 --> 0.50 / 2 = 0.25
            power(2, 0) / 2 --> 1 / 2 = 0.50
*/

var power = (base, exp) => {
  if (exp === 0) return 1;
  if (exp < 0) return power(base, exp + 1) / base;
  return base * power(base, exp - 1);
};

console.log(power(2, -3));

assert.equal(power(0, 1), 0);
assert.equal(power(2, 3), 8);
assert.equal(power(3, 0), 1);
assert.equal(power(3, 1), 3);
assert.equal(power(3, 3), 27);
assert.equal(power(5, 2), 25);
assert.equal(power(2, -3), 0.125);
assert.equal(power(3, -2), 0.1111111111111111);
assert.equal(power(10, -1), 0.1);
