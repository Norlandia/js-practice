'use strict';

let from = 20;
let to = 23;
let divisor = 6;

const range = (start, end) => {
  return [...Array(1 + end - start).keys()].map((index) => index + start);
};

const reverseNumber = (number) => {
  return +(number + '')
    .split('')
    .reverse()
    .join('');
};

const beautifulDays = (start, end, k) => {
  return range(start, end)
    .map((element) => Math.abs(element - reverseNumber(element)))
    .filter((number) => number % k === 0).length;
};

console.log(beautifulDays(from, to, divisor));
