'use strict';

let keyboardPrices = [3, 1];
let drivePrices = [5, 2, 8];
let budget = 10;

const getMoneySpent = (keyboards, drives, money) => {
  let highestPair = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (
        keyboards[i] + drives[j] <= money &&
        highestPair < keyboards[i] + drives[j]
      ) {
        highestPair = keyboards[i] + drives[j];
      }
    }
  }
  return highestPair;
};
console.log(getMoneySpent(keyboardPrices, drivePrices, budget));
