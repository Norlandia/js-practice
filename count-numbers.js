'use strict';

let testArray = [3, 5, 6, 3, 1, 1, 5];

const getSum= (list) => {
  let numberFrequency = {};

  list.forEach((number) => {
    (numberFrequency[number]) ? numberFrequency[number]++ : numberFrequency[number] = 1;
  });
  return numberFrequency;
}

console.log(getSum(testArray));
