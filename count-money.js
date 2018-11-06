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

let price = 33250;

const getWalletContent = (myMoney) => {
  return Object.entries(myMoney)
    .filter((value) => value[1] > 0)
    .map((e) => [+e[0], e[1]])
    .reverse();
};

const getDoughSpent = (moneyToPay) => {
  let walletContent = getWalletContent(wallet);
  let result = {};
  let remaining = moneyToPay;

  for (let i = 0; i < walletContent.length; i++) {
    for (let j = walletContent[i][1]; j > 0; j--) {
      if (remaining >= walletContent[i][0]) {
        remaining -= walletContent[i][0];

        if (result[walletContent[i][0]]) {
          result[walletContent[i][0]]++;
        } else {
          result[walletContent[i][0]] = 1;
        }
      }
    }
  }
  return remaining === 0 ? result : {};
};

console.log(getDoughSpent(price));
