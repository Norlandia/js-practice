'use strict';

let testArray = [1, 2, 3, 4, 5];

function minMaxSum(list) {
  let sum = 0;

  list.sort((a,b) => a - b);
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }

  console.log(`${sum - list[list.length - 1]} ${sum - list[0]}`);
}

minMaxSum(testArray);
