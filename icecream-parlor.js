'use strict';

let flavorsList = [1, 4, 5, 3, 2];
let money = 4;

function icecreamParlor(prices, m) {
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] + prices[j] === m) {
        return [i + 1, j + 1];
      }
    }
  }
}
console.log(icecreamParlor(flavorsList, money));

