'use strict';

let from = 20;
let to = 23;
let divisor = 6;

const beautifulDays = (start, end, k) => {
  let result = 0;
  let daysList = [];
  let reverseNumList = [];

  for (let i = start - 1; i < end; i++) {
    daysList.push(i + 1);
    reverseNumList.push(+((i+1) + '').split('').reverse().join(''))
  }
  
  for (let i = 0; i < daysList.length; i++) {
    if (Math.abs(daysList[i] - reverseNumList[i]) % k === 0) {
      result++;
    }
  }
  return result;
};

console.log(beautifulDays(from, to, divisor));
