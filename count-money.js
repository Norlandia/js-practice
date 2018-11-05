'use strict';

let wallet = {
  20000: 1,
  10000: 1,
  5000: 1,
  2000: 3,
  1000: 2,
  500: 0,
  200: 0,
  100: 3,
  50: 3,
  20: 3,
  10: 0,
  5: 1,
};

let price = 10000000;

function countMoney(myMoney, moneyToPay) {
  let result = {};
  let remaining = moneyToPay;

  let moneyOArray = Object.entries(myMoney);

  for (let i = 0; i < moneyOArray.length; i++) {
    moneyOArray[i][0] = +moneyOArray[i][0];
  }

  moneyOArray = moneyOArray.filter((value) => value[1] > 0);
  moneyOArray.reverse();

  for (let i = 0; i < moneyOArray.length; i++) {
    for (let j = moneyOArray[i][1]; j > 0; j--) {
      if (remaining >= moneyOArray[i][0]) {
        remaining -= moneyOArray[i][0];
        if (result[moneyOArray[i][0]]) {
          result[moneyOArray[i][0]]++;
        } else {
          result[moneyOArray[i][0]] = 1;
        }
      }
    }
  }
  return remaining === 0 ? result : {};
}

console.log(countMoney(wallet, price));
