'use strict';

let a = 3;
let b = -2;

function getSum(firstNumber, secondNumber) {
  let numberArray = [];
  let allNumbers = [];

  numberArray.push(firstNumber, secondNumber);
  numberArray.sort((a, b) => a - b);

  for (let i = numberArray[0]; i <= numberArray[1]; i++) {
    allNumbers.push(i);
  }

  return allNumbers.reduce((value, nextValue) => value + nextValue);
}

console.log(getSum(a, b));
