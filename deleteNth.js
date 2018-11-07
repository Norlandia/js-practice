'use strict';

let testList = [1, 2, 1, 2, 3, 3, 3, 1, 1, 2];
let occurrance = 2;

function deleteNth(list, n) {
  let result = [];
  let listObject = {};

  for (let number of list) {
    if (!listObject[number]) {
      listObject[number] = 1;
      result.push(number);
    } else if (listObject[number] < n) {
      listObject[number]++;
      result.push(number);
    }
  }

  return result;
}

console.log(deleteNth(testList, occurrance));
