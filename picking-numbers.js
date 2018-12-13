'use strict';

let testArray = [4, 6, 5, 3, 3, 1];

const pickingNumbers = (list) => {
  let numberObject = {};
  let max = 0;

  for (let number of list) {
    numberObject[number] ? ++numberObject[number] : (numberObject[number] = 1);
  }

  for (let key of Object.keys(numberObject)) {
    if (
      numberObject[+key + 1] &&
      numberObject[key] + numberObject[+key + 1] > max
    ) {
      max = numberObject[key] + numberObject[+key + 1];
    }
  }
  return max;
};
console.log(pickingNumbers(testArray));

// 3 3 4
