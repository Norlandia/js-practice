'use strict';

let testArray = [1, 3, 2, 6, 1, 2];

const divisibleSumPairs = (list, k) => {
  let counter = 0;

  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if ((list[i] + list[j]) % k === 0) {
        counter++;
      }
    }
  }
  return counter;
};
console.log(divisibleSumPairs(testArray, 3));
