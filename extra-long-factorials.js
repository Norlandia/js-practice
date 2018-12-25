'use strict';

const extraLongFactorials = (number) => {
  let result = number;
  for (let i = number - 1; i > 0; i--) {
    result *= i;
  }
  console.log(result);
};
extraLongFactorials(25);
