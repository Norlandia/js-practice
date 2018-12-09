'use strict';

let lostList = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
let originalList = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];


const missingNumbers = (lost, original) => {
  let result = [];
  let originalObject = {};
  let lostNumsObject = {};

  for (let number of original) {
    originalObject[number] ? ++originalObject[number] : originalObject[number] = 1; 
  }
  for (let number of lost) {
    lostNumsObject[number] ? ++lostNumsObject[number] : lostNumsObject[number] = 1;
  }
  let originalEntries = Object.entries(originalObject);
  
  for (let i = 0; i < originalEntries.length; i++) {
    if (lostNumsObject[originalEntries[i][0]] !== originalEntries[i][1]) {
      result.push(originalEntries[i][0]);
    }
  }

  return result;
}

console.log(missingNumbers(lostList, originalList));

