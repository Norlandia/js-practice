'use strict'

let testString = 'yyycwwhttaaac';

const adjacentLetters = (string) => {
  let counter = 1;
  let result = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      counter++;
    } else {
      result.push(counter);
      counter = 1;
    }
  }
  return result;
}

console.log(adjacentLetters(testString));

