'use strict';

let testArray = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
let testArray2 = [1, 4, 2];

function minimumAbsoluteDifference(list) {
  list.sort((a, b) => a - b);
  let minValue;

  for (let i = 0; i < list.length; i++) {
    if (minValue === undefined || minValue > Math.abs(list[i] - list[i + 1])) {
      minValue = Math.abs(list[i] - list[i + 1]);
    }
  }

  return minValue;
}

console.log(minimumAbsoluteDifference(testArray2));

