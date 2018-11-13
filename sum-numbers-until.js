'use strict';

let testArray = [1, 2, 3, 4, 5];

function getSum(list, limit) {
  let sum = 0;
  let roundCount = 0;

  for (let i = 0; roundCount < limit; i++) {
    if (i === list.length) {
      i = 0;
    }
    sum += list[i];
    roundCount += 1;
  }
  return sum;
}

console.log(getSum(testArray, 7));
