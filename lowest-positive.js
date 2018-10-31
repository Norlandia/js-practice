'use strict';

let testArray = [19, 5, 42, 2, 77];

function getSum(numberList) {
  let result = 0;

  numberList.sort((a, b) => a - b);
  result = numberList[0] + numberList[1];

  return result;
}

console.log(getSum(testArray));
