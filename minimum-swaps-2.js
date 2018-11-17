'use strict';

let testArray = [1, 3, 5, 2, 4, 6, 7];

function swap(list, index1, index2) {
  let temp = list[index1];
  list[index1] = list[index2];
  list[index2] = temp;

  return list;
}

function minimumSwaps(list) {
  let counter = 0;

  for (let i = 0; i < list.length; ) {
    if (list[i] > i + 1) {
      swap(list, i, list[i] - 1);
      counter++;
    } else {
      i++;
    }
  }
  return counter;
}

console.log(minimumSwaps(testArray));
