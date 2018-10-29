'use strict';

function shiftLetters(word, number) {
  let newWord = '';
  for (let i = 0; i < word.length; i++) {
    newWord += String.fromCharCode(word.charCodeAt(i) + number);
  }
  return newWord;
}

console.log(shiftLetters('Norlandia', 1));
