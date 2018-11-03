'use strict';

let a = 3;
let b = -2;

function getSum(x, y) {
  let result = 0;
  for (let i = Math.min(x, y); i <= Math.max(x, y); i++) {
    result += i;
  }
  return result;
}

console.log(getSum(a, b));
