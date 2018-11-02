'use strict';

let testArray = [19, 5, 42, 2, 77];

function getSum(numberList) {
  let result = 0;

  numberList.sort((a, b) => a - b);
  result = numberList[0] + numberList[1];

  return result;
}
console.log(getSum(testArray));

const getSum2 = (numberList) => {
  numberList.sort((a, b) => a - b);
  return numberList[0] + numberList[1];
}
console.log(getSum2(testArray));
