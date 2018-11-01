'use strict';

let testArray = [6, 3, 4, 1, 2, 4, 8];
let minLimit = 3;
let maxLimit = 6;

function orderedList(list, min, max) {
  let result = [];

  list.sort((a, b) => a - b).forEach((element) => {
    if (min <= element && max >= element) {
      result.push(element);
    }
  });
  return result;
}
console.log(orderedList(testArray, minLimit, maxLimit));
