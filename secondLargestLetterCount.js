'use strict';

let string = 'almasssbbeee';

const secondLargestLetterCount = (text) => {
  let maxCount;
  let secondMaxCount;
  let letterObj = {};

  for (let letter of text) {
    letterObj[letter] ? ++letterObj[letter] : (letterObj[letter] = 1);
  }

  Object.entries(letterObj).map((letterFreguency) => {
    if (maxCount === undefined || letterFreguency[1] > maxCount[1]) {
      secondMaxCount = maxCount;
      maxCount = letterFreguency;
    } else if (secondMaxCount === undefined || secondMaxCount[0][1] <= letterFreguency[1]) {
      secondMaxCount = letterFreguency;
    }
  });

  return secondMaxCount[0];
};

console.log(secondLargestLetterCount(string));

// commit later
