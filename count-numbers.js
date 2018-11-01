'use strict';

let testArray = [3, 5, 6, 3, 1, 1, 5];

function getSum(list) {
  let numberFrequency = {};

  list.forEach((number) => {
    if (numberFrequency[number]) {
      numberFrequency[number]++;
    } else {
      numberFrequency[number] = 1;
    }
  });

  return numberFrequency;
}
console.log(getSum(testArray));
