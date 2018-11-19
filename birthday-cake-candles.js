'use strict';

let testArray = [3, 2, 1, 3];

function birthdayCakeCandles(candles) {
  let max = 0;
  let counter = 0;

  max = Math.max(...candles);
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === max) {
      counter++;
    }
  }
  return counter;
}

console.log(birthdayCakeCandles(testArray));

