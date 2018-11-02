'use strict';

//increase all elements by 1 return the sum of them

const increaseSum = (numberList) => {
  
  return numberList
    .map((number) => number + 1)
    .reduce((result, nextNumber) =>  result + nextNumber);
};

console.log(increaseSum([1, 2, 3, 4, 5]));
