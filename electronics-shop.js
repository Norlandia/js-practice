'use strict';

let keyboardPrices = [3, 1];
let drivePrices = [5, 2, 8];
let budget = 10;

const getMoneySpent = (keyboards, drives, money) => {
  let highestPair = -1;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let sum = keyboards[i] + drives[j];
      if (sum <= money && highestPair < sum) {
        highestPair = sum;
      }
    }
  }
  return highestPair;
};
console.log(getMoneySpent(keyboardPrices, drivePrices, budget));
