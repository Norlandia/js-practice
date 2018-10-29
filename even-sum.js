'use strict'

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

console.log(evenSum(myArray));


const evenSum2 = (numbers) => {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result += numbers[i];
    }
  }
  return result;
}

console.log(evenSum2(myArray));

console.log(myArray.reduce((x , y) => x * y, 1));
