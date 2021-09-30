var assert = require('assert');

// Fibonacci sequence (multiple recursivity)
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

/*
n = 5

                                            fib(5)

                      fib(4)                 +                   fib(3)

            fib(3)     +        fib(2)              fib(2)        +        fib(1)

      fib(2) + fib(1)      fib(1) + fib(0)    fib(1) + fib(0)

fib(1) + fib(0)


- fib(0) = 0 and fib(1) = 1
- The Fibonacci sequence forms a "tree" that goes from left to right and from bottom to top
- You have to replace fib(1) by 1 and fib(0) by 0
- fib(2) = 1 because fib(2) = fib(1) + fib(0)
- fib(3) = 2 because fib(3) = fib(2) + fib(1)
- fib(n) = x because fib(n) = fib(n-1) + fib(n-2)
*/

var fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(5));

assert.equal(fibonacci(0), 0);
assert.equal(fibonacci(1), 1);
assert.equal(fibonacci(3), 2);
assert.equal(fibonacci(5), 5);

// Fibonacci sequence with memoization (more efficient in terms of execution time)

var memo = {},
  result;

var fibonacci2 = (n) => {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  result = fibonacci2(n - 1) + fibonacci2(n - 2);
  memo[n] = result;
  return result;
};

console.log('-------------------------------');
console.log('Fibonacci with memoization');
console.log('-------------------------------');
console.log(fibonacci2(5), memo);
console.log(fibonacci2(10), memo);

assert.equal(fibonacci2(7), 13);
assert.equal(fibonacci2(10), 55);
