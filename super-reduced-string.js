'use strict';

let testString = 'baab';

function superReducedString(string) {
  let newString = '';

  string = string.split('');
  string.sort();

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) {
      newString += string[i];
    } else {
      i++;
    }
  }

  return newString ? newString : 'Empty String';
}

console.log(superReducedString(testString));
