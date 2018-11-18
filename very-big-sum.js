'use strict';

let testArray = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function getSum(list) {
  let result = 0;
  for (let i = 0; i < list.length; i++) {
    result += list[i];
  }
  return result;
}
console.log(getSum(testArray));

