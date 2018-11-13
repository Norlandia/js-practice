'use strict';

let testString = 'aab';
let number = 11;

function repeatedString(s, n) {
  let result = 0;
  s = s.split('');
  console.log(s);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      result++;
    }
  }
  result = result * Math.floor(n / s.length);

  let remaining = n % s.length;

  for (let i = 0; i < remaining; i++) {
    if (s[i] === 'a') {
      result++;
    }
  }

  return result;
}

console.log(repeatedString(testString, number));
