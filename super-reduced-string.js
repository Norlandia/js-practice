'use strict';

let testString = 'aabb';

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


function superReducedString2(string) {
  string = string.split('');
  string.sort();

  for (let i = 0; i < string.length; ) {
    if (string[i] === string[i + 1]) {
      string.splice(0, 2);
    } else {
      i++;
    }
  }
  return string.length ? string : 'Empty String';
}

console.log(superReducedString2(testString));
