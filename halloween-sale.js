'use strict';

const halloweenSale = (originalPrice, discount, min, wallet) => {
  let games = 0;
  let i = originalPrice;
  while (i <= wallet) {
    if (i > min) {
      wallet -= i;
      games += 1;
      i -= discount;
    } else if (wallet - min >= 0) {
      wallet -= min;
      games += 1;
    }
  }
  return games;
};

const halloweenSale2 = (originalPrice, discount, min, wallet) => {
  let counter = 0;
  let newWallet = wallet;
  let remaining = 0;

  while (originalPrice >= min && originalPrice <= newWallet) {
    newWallet -= originalPrice;
    counter += 1;
    originalPrice -= discount;
  }
  if (originalPrice <= min) {
    remaining = newWallet / min;
  }
  return originalPrice > wallet ? 0 : Math.floor(remaining + counter);
};
console.log(halloweenSale2(20, 3, 6, 80));

