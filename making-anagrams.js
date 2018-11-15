'use strict';

let s1 = 'fsqoiaidfaukvngpsugszsnseskicpejjvytviya';
let s2 = 'ksmfgsxamduovigbasjchnoskolfwjhgetnmnkmcphqmpwnrrwtymjtwxget';

function countLetters(word) {
  let letterObj = {};

  for (let letter of word) {
    if (letterObj[letter]) {
      letterObj[letter]++;
    } else {
      letterObj[letter] = 1;
    }
  }
  return letterObj;
}

function countMatches(letterObj, word2) {
  let matchingLetterCount = 0;

  for (let letter2 of word2) {
    if (letterObj[letter2]) {
      matchingLetterCount++;
      letterObj[letter2]--;
    }
  }
  return matchingLetterCount;
}

function getAnagram(word, word2) {
  let letterCount = countLetters(word);
  let matchCount = countMatches(letterCount, word2);

  return word.length + word2.length - 2 * matchCount;
}

console.log(getAnagram(s1, s2));
