'use strict';

//sum of even numbers in an array

let myArray = [1, 2, 3, 4, 5];

function evenSum(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result += numbers[i];
    }
  }
  return result;
}

const evenSum2 = (numbers) => {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result += numbers[i];
    }
  }
  return result;
};

const evenSum3 = (numbers) => {
  return numbers
    .filter((number) => number % 2 === 0)
    .reduce((sum, accumulator) => sum + accumulator);
};

console.log(evenSum(myArray));
console.log(evenSum2(myArray));
console.log(evenSum3(myArray));
