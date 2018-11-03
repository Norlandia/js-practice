'use strict';

let test = "The sunset sets at twelve o' clock.";

const alphabetPosition = (text) => {
  let position = '';
  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    if (97 <= text.charCodeAt(i) && text.charCodeAt(i) <= 122) {
      position += `${text.charCodeAt(i) - 96} `;
    }
  }

  return position.trim();
};
console.log(alphabetPosition(test));
