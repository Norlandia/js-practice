'use strict';

function shiftLetters(word, number) {
  let newWord = '';
  for (let i = 0; i < word.length; i++) {
    newWord += String.fromCharCode(word.charCodeAt(i) + number);
  }
  return newWord;
}

console.log(shiftLetters('Norlandia', 1));

const shiftLetters2 = (word, number) => {
  return word
    .split('')
    .reduce(
      (result, letter) =>
        result + String.fromCharCode(letter.charCodeAt(0) + number),
      ''
    );
};

console.log(shiftLetters2('Norlandia', 1));
