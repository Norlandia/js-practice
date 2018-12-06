'use strict';

let fullBill = [3, 10, 2, 9];
let priceNotIncl = 1;
let refund = 7;

const bonAppetit = (bill, notInclIndex, charged) => {
  let annaBill = 0;

  bill.map((price, i) => (annaBill += bill[i] / 2));
  annaBill -= bill[notInclIndex] / 2;

  charged === annaBill ? console.log('Bon Appetit') : console.log(charged - annaBill);
};

bonAppetit(fullBill, priceNotIncl, refund);
