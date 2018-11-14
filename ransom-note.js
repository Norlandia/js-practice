'use strict';

let m = ['give', 'me', 'hello', 'grand', 'today', 'night'];
let n = ['give', 'two', 'alma', 'today'];

function countWords(magazine) {
  let magazineObj = {};

  for (let word of magazine) {
    if (magazineObj[word]) {
      magazineObj[word]++;
    } else {
      magazineObj[word] = 1;
    }
  }
  return magazineObj;
}

function matchWords(magazineObj, n) {
  for (let i = 0; i < n.length; i++) {
    if (magazineObj[n[i]]) {
      magazineObj[n[i]]--;
    } else {
      console.log('No');
      return;
    }
  }
  console.log('Yes');
}

function checkMagazine(magazine, note) {
  let wordsInMagazine = countWords(magazine);
  matchWords(wordsInMagazine, note);
}
checkMagazine(m, n);
