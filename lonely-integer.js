'use strict';

let testArray = [1, 1, 2];

const lonelyInteger = (list) => {
  let numberObj = {};

  for (let number of list) {
    numberObj[number] ? ++numberObj[number] : (numberObj[number] = 1);
  }

  for (let entry of Object.entries(numberObj)) {
    if (entry[1] === 1) {
      return entry[0];
    }
  }
};
console.log(lonelyInteger(testArray));
