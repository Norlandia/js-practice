'use strict';

let testWord = 'Dermatoglyphics';
let testWord2 = 'moOse';
let testWord3 = '';

function isIsogram(word) {
  let letterObject = {};

  word
    .toLowerCase()
    .split('')
    .map((letter) => {
      if (letterObject[letter]) {
        letterObject[letter]++;
      } else {
        letterObject[letter] = 1;
      }
    });

  for (let amount of Object.values(letterObject)) {
    if (amount > 1) {
      return false;
    } 
  }
  return true;
}

//console.log(isIsogram(testWord3));

const isIsogram2 = (word) => {
  return !/(\w).*\1/i.test(word);
}

console.log(isIsogram2(testWord3));

