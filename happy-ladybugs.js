'use strict';

const isUnderline = (letterObj) => {
  for (let entry of Object.entries(letterObj)) {
    if (entry[0] === '_') {
      return true;
    }
  }
  return false;
};

const keyMoreThanOne = (letterObj) => {
  for (let entry of Object.entries(letterObj)) {
    if (entry[0] !== '_' && entry[1] > 1) {
      continue;
    } else if (entry[0] !== '_' && entry[1] <= 1) {
      return false;
    }
  }
  return true;
};

const alreadyAllHasGoodNeighbor = (string) => {
  if (string.length === 1 && string[0] !== '_') {
    return false;
  } else {
    for (let i = 0; i < string.length; ) {
      if (string[i - 1] === string[i] || string[i + 1] === string[i]) {
        i++;
      } else {
        return false;
      }
    }
    return true;
  }
};

const happyLadybugs = (string) => {
  let letterObj = {};

  for (let letter of string) {
    letterObj[letter] ? ++letterObj[letter] : (letterObj[letter] = 1);
  }

  return alreadyAllHasGoodNeighbor(string) ||
    (isUnderline(letterObj) && keyMoreThanOne(letterObj))
    ? 'YES'
    : 'NO';
};

console.log(happyLadybugs('P______'));

