'use strict';

let testArray = [1, 2, 3, 4, 5];

function switchNumbers(list, index1, index2) {
  let value1 = list[index1];

  list[index1] = list[index2];
  list[index2] = value1;
  return list;
}

console.log(switchNumbers(testArray, 1, 3));
