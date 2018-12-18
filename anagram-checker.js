'use strict';

const anagramChecker = (string1, string2) => {
  let letterObj1 = {};
  let letterObj2 = {};

  for (let letter of string1) {
    letterObj1[letter] ? ++letterObj1[letter] : (letterObj1[letter] = 1);
  }

  for (let letter of string2) {
    letterObj2[letter] ? ++letterObj2[letter] : (letterObj2[letter] = 1);
  }

  if (Object.entries(letterObj1).length !== Object.entries(letterObj2).length) {
    return 'NO';
  }
  for (let i = 0; i < Object.entries(letterObj2); i++) {
    if (letterObj1[i] === letterObj2[i]) {
      continue;
    } else {
      return 'NO';
    }
  }
  return 'YES';
};

console.log(anagramChecker('coool', 'occclb'));
