'use strict';

let myList = [1, 2, 3, 4, 5];

function addPairs(numbers) {
  let result = [];

  if (numbers.length % 2 === 0) {
    for (let i = 0; i < numbers.length; i++) {
      if (i % 2 === 0) {
        result.push(numbers[i] + numbers[i + 1]);
      }
    }
    return result;
  } else {
    let last = numbers[numbers.length - 1];
    numbers.pop();
    for (let i = 0; i < numbers.length; i++) {
      if (i % 2 === 0) {
        result.push(numbers[i] + numbers[i + 1]);
      }
    }
    result.push(last);
    return result;
  }
}

console.log(addPairs(myList));
