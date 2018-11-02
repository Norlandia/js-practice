'use strict';

let myList = [1, 2, 3, 4, 6];

function addPairs(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0 && numbers[i + 1]) {
      result.push(numbers[i] + numbers[i + 1]);
    } else if (i % 2 === 0) {
      result.push(numbers[i]);
    }
  }

  return result;
}

console.log(addPairs(myList));
