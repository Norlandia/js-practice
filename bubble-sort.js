'use strict';

let testList = [3, 2, 1];

function swap(array, j) {
  let temp = 0;

  temp = array[j];
  array[j] = array[j + 1];
  array[j + 1] = temp;
}

function countSwaps(list) {
  let swapCount = 0;
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (list[j] > list[j + 1]) {
        swap(list, j);

        swapCount++;
      }
    }
  }
  console.log(`Array is sorted in ${swapCount} swaps.`);
  console.log(`First Element: ${list[0]}`);
  console.log(`Last Element: ${list[list.length - 1]}`);
}

countSwaps(testList);
