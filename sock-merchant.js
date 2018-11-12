'use strict';

let n = 15;
let ar = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];

function sockMerchant(numberOfSocks, allSocks) {
  ar.sort((a, b) => a - b);
  console.log(ar);

  let sockFrequency = {};
  let result = 0;

  for (let sock of allSocks) {
    if (sockFrequency[sock]) {
      sockFrequency[sock]++;
      result += Math.floor(sockFrequency[sock] / 2);
      sockFrequency[sock] = 0;
    } else {
      sockFrequency[sock] = 1;
    }
  }

  return result;
}

console.log(sockMerchant(n, ar));
