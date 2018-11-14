'use strict';

let s1 = 'hello';
let s2 = 'hhh';

function isMatch(word1, word2) {
  let wordObj = {};

  for (let letter of word1) {
    if (wordObj[letter]) {
      wordObj[letter]++;
    } else {
      wordObj[letter] = 1;
    }
  }

  for (let letter2 of word2) {
    if (wordObj[letter2]) {
      return 'Yes';
    }
  }
  return 'No';
}

console.log(isMatch(s1, s2));
