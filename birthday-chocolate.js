'use strict';

let chocolateBar = [1, 2, 1, 3, 2];
let birthDay = 3;
let birthMonth = 2;

const birthdayChocolate = (chocolate, day, month) => {
  let results = [];

  for (let i = 0; i < chocolate.length; i++) {
    if (chocolate[i + month - 1] !== undefined) {
      let sum = chocolate[i];
      let j = 1;
      while (j < month) {
        sum += chocolate[i + j];
        j++;
      }
      results.push(sum);
    }
  }
  return results.filter(number => number === day).length;
};

console.log(birthdayChocolate(chocolateBar, birthDay, birthMonth));
