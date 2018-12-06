'use strict';

let fullBill = [3, 10, 2, 9];
let priceNotIncl = 1;
let refund = 12;

const bonAppetit = (bill, notInclIndex, charged) => {
  let annaBill = 0;
  for (let i = 0; i < bill.length; i++) {
    annaBill += bill[i] / 2;
  }
  annaBill -= bill[notInclIndex] / 2;

  if (charged === annaBill) {
    console.log('Bon Appetit');
  } else if (charged > annaBill) {
    console.log(charged - annaBill);
  }
};

console.log(bonAppetit(fullBill, priceNotIncl, refund));

