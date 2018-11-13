'use strict';

let testString = 'aab';
let number = 11;

function countA(inputString) {
  let aCount = 0;

  inputString = inputString.split('');

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === 'a') {
      aCount++;
    }
  }

  return aCount;
}

function repeatedString(s, n) {
  let result = countA(s);

  result = result * Math.floor(n / s.length);

  let remaining = n % s.length;

  s = s.slice(0, remaining);

  result += countA(s);

  return result;
}

console.log(repeatedString(testString, number));
