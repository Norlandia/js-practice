'use strict';

let testString = 'AAABBB';

const alternatingCharacters = (string) => {
  let letterList = string.split('');
  for (let i = 0; i < letterList.length; ) {
    if (letterList[i] === letterList[i + 1]) {
      letterList.splice(i, 1);
      i = 0;
    } else {
      i++;
    }
  }

  return string.length - letterList.length;
};

console.log(alternatingCharacters(testString));

