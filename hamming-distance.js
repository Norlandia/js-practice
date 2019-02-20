'use strict';

let testString = 'monkey';

let listToCheck = ['donkey', 'monday', 'shaker'];

const checkLetters = (word, list) => {
  let result = [];

  for (let i = 0; i < list.length; i++) {
    let counter = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[j] !== list[i][j]) {
        counter++;
      }
    }
    if (counter <= 3) {
      result.push(list[i]);
    }
  }
  return result;
};

console.log(checkLetters(testString, listToCheck));

// loop string
// <= 3
