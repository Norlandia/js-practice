'use strict';

let testString = 'www.abc.xy';
let k = 87;

function caesarCipher(string, shift) {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    let upperLower;

    if (string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122) {
      upperLower = 97;
    } else if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
      upperLower = 65;
    }

    if (upperLower) {
      newString += String.fromCharCode(
        ((string[i].charCodeAt() - upperLower + shift) % 26) + upperLower
      );
    } else {
      newString += string[i];
    }
  }

  return newString;
}
console.log(caesarCipher(testString, k));
