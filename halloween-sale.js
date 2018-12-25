'use strict';

const halloweenSale = (originalPrice, discount, min, wallet) => {
  let games = 0;
  let i = originalPrice;
  while (i < wallet) {
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

console.log(halloweenSale(20, 3, 6, 80));
