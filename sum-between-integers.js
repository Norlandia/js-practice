'use strict';

let a = 3;
let b = -2;

function getSum(firstNumber, secondNumber) {
  let result = 0;
  let numberArray = [];
  let allNumbers = [];

  numberArray.push(firstNumber, secondNumber);
  numberArray.sort((a, b) => a - b);

  for (let i = numberArray[0]; i <= numberArray[1]; i++) {
    allNumbers.push(i);
  }

  for (let i = 0; i < allNumbers.length; i++) {
    result += allNumbers[i];
  }

  return result;
}

console.log(getSum(a, b));
