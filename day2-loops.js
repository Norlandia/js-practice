'use strict';

let testString = 'javascriptloops';

function loops(word) {
  let vowels = word.match(/[aeiou]/g);
  word = word.replace(/[aeiou]/g, '');

  let concatted = vowels
    .concat(word)
    .join()
    .replace(/\W/g, '');

  for (let letter of concatted) {
    console.log(letter);
  }
}

loops(testString);
