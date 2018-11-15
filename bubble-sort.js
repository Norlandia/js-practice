'use strict';

let testList = [3, 2, 1];

function countSwaps(list) {
  let temp = 0;
  let swap = 0;
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (list[j] > list[j + 1]) {
        // swap(list[j], list[j + 1]);
        temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        swap++;
      }
    }
  }
  console.log(`Array is sorted in ${swap} swaps.`);
  console.log(`First Element: ${list[0]}`);
  console.log(`Last Element: ${list[list.length -1]}`);
}

countSwaps(testList);
