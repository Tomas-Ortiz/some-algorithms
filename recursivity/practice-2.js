var assert = require('assert');

// Palindrome with recursion

/*
str = reconocer

================
      #1
================
str.length > 1
r === r (first and last character)
str = econoce
================
      #2
================
str.length > 1
e === e
str = conoc
================
      #3
================
str.length > 1
c === c
str = ono
================
      #4
================
str.length > 1
o === o
str = n
================
      #4
================
str.length <= 1
return true
*/

var firstCharacter = (str) => str.slice(0, 1);

var middleCharacters = (str) => str.slice(1, -1);

var lastCharacter = (str) => str.slice(-1);

var formatStr = (str) => str.replace(/ /g, '').toLowerCase();

var isPalindrome = (str) => {
  // base case #1
  if (str.length <= 1) return true;
  // base case #2
  if (firstCharacter(str) !== lastCharacter(str)) return false;
  // recursive case
  return isPalindrome(middleCharacters(str));
};

var checkPalindrome = (str) => {
  str = formatStr(str);
  return isPalindrome(str);
};

console.log('Is "a" a palindrome?', checkPalindrome('a'));
console.log('Is "motor" a palindrome?', checkPalindrome('motor'));
console.log('Is "reconocer" a palindrome?', checkPalindrome('reconocer'));
console.log('Is "xy yx" a palindrome?', checkPalindrome('xy yx'));
console.log('Is "Luz azul" a palindrome?', checkPalindrome('Luz azul'));
console.log('Is "amor a Roma" a palindrome?', checkPalindrome('amor a Roma'));

assert.equal(checkPalindrome('a'), true);
assert.equal(checkPalindrome('motor'), false);
assert.equal(checkPalindrome('reconocer'), true);
assert.equal(checkPalindrome('xy yx'), true);
assert.equal(checkPalindrome('Luz azul'), true);
assert.equal(checkPalindrome('amor a Roma'), true);
