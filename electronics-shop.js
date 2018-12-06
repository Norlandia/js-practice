'use strict';

let keyboardPrices = [3, 1];
let drivePrices = [5, 2, 8];
let budget = 10;

const getMoneySpent = (keyboards, drives, money) => {
  let highestPrice = 0;
  keyboards.sort((a, b) => b - a);
  drives.sort((a, b) => b - a);

  if (keyboards[0] > drives[0]) {
    highestPrice = keyboards[0];
    for (let i = 0; i < drives.length; i++) {
      if (highestPrice + drives[i] <= money) {
        return highestPrice + drives[i];
      }
    }
  } else {
    highestPrice = drives[0];
    for (let i = 0; i < keyboards.length; i++) {
      if (highestPrice + keyboards[i] <= money) {
        return highestPrice + keyboards[i];
      }
    }
  }
  return -1;
};
console.log(getMoneySpent(keyboardPrices, drivePrices, budget));
