'use strict';

let testArray = [1, 3, 5, 2, 4, 6, 7];


function minimumSwaps(list) {
  let counter = 0;
  let indexOfSmallest = 0;
  let temp = 0;
  
  for (let i = 0; i < list.length; i++) {
    indexOfSmallest = list.indexOf(i+1);
    if (list[i] > i + 1) {
      temp = list[i];
      list[i] = list[indexOfSmallest];
      list[indexOfSmallest] = temp;   
      counter++;
    }
  }
  return counter;
}

console.log(minimumSwaps(testArray));

//           [4, 3, 1, 2]
// [4 <-> 1] [1, 3, 4, 2]
// [3 <-> 2] [1, 2, 4, 3]
// [4 <-> 3] [1, 2, 3, 4]

// 3


