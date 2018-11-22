'use strict';

let testArray = [2, 3, 6, 6, 5, 7];

function secondLargest(list) {
  list.sort((a, b) => a - b);
  for (let i = list.length - 1; i < list.length; ) {
    if (list[i] > list[i - 1]) {
      return list[i - 1];
    } else {
      i--;
    }
  }
}

function secondLargest2(list) {
  let max = 0;
  let secondMax = 0;

  let array = [...new Set(list)];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      secondMax = max;
      max = array[i];
    } else if (array[i] > secondMax) {
      secondMax = array[i];
    }
  }
  return secondMax;
}

console.log(secondLargest2(testArray));
