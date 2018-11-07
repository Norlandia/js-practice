'use strict';

let testArray = [16, 16, 13, 16, 16, 16, 16];

function stray(numberList) {
  let listObject = {};
  let result = 0;

  for (let number of numberList) {
    if (!listObject[number]) {
      listObject[number] = 1;
    } else if (listObject[number]) {
      listObject[number]++;
    }
  }

  Object.keys(listObject).map((key) => {
    if (listObject[key] < 2) {
      result += +key;
    }
  });

  return result;
}

console.log(stray(testArray));
