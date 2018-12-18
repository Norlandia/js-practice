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
    console.log(entry);
    
    if (entry[0] !== '_' && entry[1] > 1) {
      continue;
    } else if (entry[0] !== '_' && entry[1] <= 1) {
      return false;
    }
  }
  return true;
};

const happyLadybugs = (string) => {
  let letterObj = {};

  for (let letter of string) {
    letterObj[letter] ? ++letterObj[letter] : (letterObj[letter] = 1);
  }

  return isUnderline(letterObj) && keyMoreThanOne(letterObj) ? 'YES' : 'NO';
};

console.log(happyLadybugs('RBY_YBR'));

// DD__FQ_QQF
// DD_FFQ_QQ_
// DD_FFQQQ__

// AABBCC
