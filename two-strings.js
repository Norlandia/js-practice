'use strict';

let s1 = 'hello';
let s2 = 'hhh';

function countLetters(word) {
  let wordObj = {};

  for (let letter of word) {
    if (wordObj[letter]) {
      wordObj[letter]++;
    } else {
      wordObj[letter] = 1;
    }
  }
  return wordObj;
}

function isMatch(wordObj, word2) {
  for (let letter2 of word2) {
    if (wordObj[letter2]) {
      return 'Yes';
    }
  }
  return 'No';
}

function twoStrings(word, word2) {
  let letterCount = countLetters(word);
  let result = isMatch(letterCount, word2);
  return result;
}
console.log(twoStrings(s1, s2));
