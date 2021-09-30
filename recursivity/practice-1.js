var assert = require('assert');

/*
n = 5

fact(5) = return 5 * fact(4) = 5 * 24 = 120
 fact(4) = return 4 * fact(3) = 4 * 6 = 24
  fact(3) = return 3 * fact(2) = 3 * 2 = 6
   fact(2) = return 2 * fact(1) = 2 * 1 = 2
    fact(1) = return 1 * fact(0) = 1
     fact(0) = 1 (base case)

*/

// Factorial without recursion
var factorial1 = (n) => {
  var result = 1;
  for (var i = 1; i < n; i++) {
    result = result * (i + 1);
  }
  return result;
};

console.log('=============================');
console.log('Factorial without recursion');
console.log('=============================');

console.log('n = 0', factorial1(0));
console.log('n = 2', factorial1(2));
console.log('n = 3', factorial1(3));
console.log('n = 5', factorial1(5));

// Factorial with recursion
var factorial2 = (n) => {
  // base case
  if (n === 0) return 1;
  // recursive case
  return n * factorial2(n - 1);
};

console.log('=============================');
console.log('Factorial with recursion');
console.log('=============================');

console.log('n = 0', factorial2(0));
console.log('n = 2', factorial2(2));
console.log('n = 3', factorial2(3));
console.log('n = 5', factorial2(5));

assert.equal(factorial1(0), 1);
assert.equal(factorial1(5), 120);
assert.equal(factorial1(6), 720);

assert.equal(factorial2(0), 1);
assert.equal(factorial2(5), 120);
assert.equal(factorial2(6), 720);
