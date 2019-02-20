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

const maxThree = (word, testWord) => {
  return (
    [...word].reduce(
      (counter, letter, i) => (letter !== testWord[i] ? ++counter : counter),
      0
    ) <= 3
  );
};

const checkLetters2 = (testWord, list) => {
  return list.filter((word) => maxThree(word, testWord));
};

console.log(checkLetters2(testString, listToCheck));

// loop string
// <= 3
