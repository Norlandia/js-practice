'use strict';

let testArray = [1, 2, 3, 4, 5];

function getSum(list, limit) {
  let sum = 0;

  for (let i = 0; i < limit; sum += list[i++ % 5]);
  return sum;
}

console.log(getSum(testArray, 7));
