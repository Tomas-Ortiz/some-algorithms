var assert = require('assert');

// El arreglo debe estar ordenado para hacer una búsqueda binaria
var primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];
var target = 67,
  index = 0,
  steps = 0;

var linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return [i, i + 1];
    } else if (i === array.length - 1) {
      return [-1, i + 1];
    }
  }
};

[index, steps] = linearSearch(primes, target);

console.log('=============================================');
console.log('Lineal Search');
console.log('=============================================');
console.log('The value', target, 'was found in the index', index);
console.log('Steps =', steps);

var binarySearch = (array, target) => {
  let min = 0,
    max = array.length - 1,
    steps = 0,
    guess;

  // si min es mayor que max entonces el elemento no se encontró en el array y termina el bucle
  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    steps++;
    if (array[guess] === target) {
      return [guess, steps];
    } else if (array[guess] < target) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return [-1, steps];
};

var calculateAttempts = (n, base) => {
  return Math.floor(Math.log(n) / Math.log(base) + 1);
};

[index, steps] = binarySearch(primes, target);

console.log('=============================================');
console.log('Binary Search');
console.log('=============================================');
console.log('The value', target, 'was found in the index', index);
console.log(
  'Steps =',
  steps,
  ', Max. expected steps = ',
  calculateAttempts(primes.length, 2)
);

assert.equal(binarySearch(primes, 41)[0], 12);
assert.equal(binarySearch(primes, 73)[0], 20);
assert.equal(binarySearch(primes, 97)[0], 24);
