'use strict';

let stringToCheck = 'hereiamstackerank';

function hackerrankInString(string) {
  return string.match(
    /(\w+)?h(\w+)?a(\w+)?c(\w+)?k(\w+)?e(\w+)?r(\w+)?r(\w+)?a(\w+)?n(\w+)?k(\w+)?/g
  )
    ? 'YES'
    : 'NO';
}
console.log(hackerrankInString(stringToCheck));

function hackerrankInString2() {
  const word = 'hackerrank';
  let j = 0;
  for (let i = 0; i < string.length && j < word.length; i++) {
    if (string[i] === word[j]) {
      j++;
    }
  }
  return j === word.length ? 'YES' : 'NO';
}

console.log(hackerrankInString2(stringToCheck));
