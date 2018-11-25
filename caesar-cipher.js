'use strict';

let testString = 'www.abc.xy';
let k = 87;

function caesarCipher(string, shift) {
  let newString = '';

  for (let i = 0; i < string.length; i++) {

    if (string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122) {

      if (string[i].charCodeAt() + shift > 122) {
        newString += String.fromCharCode(
          ((string[i].charCodeAt() - 97 + shift) % 26) + 97
        );
      } else {
        newString += String.fromCharCode(string[i].charCodeAt() + shift);
      }

    } else if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {

      if (string[i].charCodeAt() + shift > 90) {
        newString += String.fromCharCode(
          ((string[i].charCodeAt() - 65 + shift) % 26) + 65
        );
      } else {
        newString += String.fromCharCode(string[i].charCodeAt() + shift);
      }

    } else {
      newString += string[i];
    }
  }
  return newString;
}
console.log(caesarCipher(testString, k));
