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
console.log(secondLargest(testArray));
