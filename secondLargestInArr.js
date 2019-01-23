'use strict';

let testArr = [-8, -5, -1, -10, -7, -4, -10];

const secondLargest = (list) => {
  let max;
  let secondMax;

  let array = [...new Set(list)];

  for (let i = 0; i < array.length; i++) {
    if (max === undefined || max < array[i]) {
      secondMax = max;
      max = array[i];
    } else if (secondMax === undefined || secondMax < list[i]) {
      secondMax = list[i];
    }
  }

  return secondMax;
};

const secondLargest2 = (list) => {
  list.sort((a, b) => a - b);

  return list[list.length - 2];
};

console.log(secondLargest(testArr));

