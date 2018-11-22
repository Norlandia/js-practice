'use strict';

let testArray = [2, 3, 6, 6, 5];

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
  let array = [...new Set(list)];
  array.sort((a, b) => b - a);
  return array[1];
}

console.log(secondLargest2(testArray));
