'use strict';

const findDigits = (number) => {
  let counter = 0;
  let stringNum = number.toString().split('');

  for (let i = 0; i < stringNum.length; i++) {
    if (number % stringNum[i] === 0) {
      counter++;
    }
  }
  return counter;
};

console.log(findDigits(12));
