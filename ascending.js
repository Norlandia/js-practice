'use strict';

let testArray = [6, 3, 4, 1, 2, 4, 8];
let minLimit = 3;
let maxLimit = 6;

function orderedList(list, min, max) {
  return list
    .sort((a, b) => a - b)
    .filter((number) => min <= number && max >= number);
}
console.log(orderedList(testArray, minLimit, maxLimit));
