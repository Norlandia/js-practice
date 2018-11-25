'use strict';

let testString = 'middle-Outz';
let k = 2;

function caesarCipher(string, shift) {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122) {
      if (string[i].charCodeAt() + shift > 122) {
        newString +=
          String.fromCharCode((string[i].charCodeAt() + shift) % 123 + 97);
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

// 97-122 ()
// 65-90
// after last letter (z) restart form a
