'use strict';

let priceList = [1, 12, 5, 111, 200, 1000, 10];
let budget = 50;

function maximumToys(prices, money) {
  let counter = 0;

  prices = prices.sort((a, b) => a - b);

  for (let price of prices) {
    if (money > price) {
      money -= price;
      counter++;
    }
  }
  return counter;
}

console.log(maximumToys(priceList, budget));

