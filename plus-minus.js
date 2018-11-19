'use strict';

let testArray = [-4, 3, -9, 0, 4, 1];

function plusMinus(list) {
  let positiveCounter = 0;
  let negativeCounter = 0;
  let zeroCounter = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i] > 0) {
      positiveCounter++;
    } else if (list[i] < 0) {
      negativeCounter++;
    } else {
      zeroCounter++;
    }
  }
  console.log(positiveCounter / list.length);
  console.log(negativeCounter / list.length);
  console.log(zeroCounter / list.length);
}

plusMinus(testArray);

//positive numbers 0.500000 3/6
//negative numbers 0.333333 2/6
// zero 0.166667 1/6
