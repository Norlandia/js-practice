'use strict';

let targetValue = 2;
let testArray = [1, 5, 3, 4, 2];

const pairs = (value, list) => {
  let result = 0;

  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j <= list.length; j++) {
      if (list[i] - list[j] === value) {
        result++;
      } else if (list[j] - list[i] === value) {
        result++;
      }
    }
  }
  return result;
};

console.log(pairs(targetValue, testArray));
