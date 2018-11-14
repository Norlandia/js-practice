'use strict';

let testArray = [1, 2, 3, 4, 5];
let number = 10;

function rotLeft(list, n) {
  let result = [];

  for (let i = n; i < list.length + n; i++) {
    result.push(list[i % list.length]);
  }
  return result;
}

console.log(rotLeft(testArray, number));

// [2, 3, 4, 5, 1]
// [3, 4, 5, 1, 2]
// [4, 5, 1, 2, 3]
// [5, 1, 1, 2, 3]
// (0 1 2 3 4 5)
// (1 2 3 4 5 0)
