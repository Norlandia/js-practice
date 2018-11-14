'use strict';

let s1 = 'norii';
let s2 = 'petiii';

function getAnagram(word, word2) {
  let letterObj = {};
  let matchingLetterCount = 0;

  for (let letter of word) {
    if (letterObj[letter]) {
      letterObj[letter]++;
    } else {
      letterObj[letter] = 1;
    }
  }

  for (let letter2 of word2) {
    if (letterObj[letter2]) {
      matchingLetterCount++;
      letterObj[letter2]--;
    }
  }

  return word.length + word2.length - 2 * matchingLetterCount;
}

console.log(getAnagram(s1, s2));
