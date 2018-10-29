'use strict';

let myList = [1, 2, 7, 4, 3];

const largestNumber = numbers => {
  return Math.max(...numbers);
}

console.log(largestNumber(myList));
