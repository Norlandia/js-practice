'use strict';

let testArray = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function getSum(list) {
  
  return list.reduce((a,b) => a + b);
}
console.log(getSum(testArray));

