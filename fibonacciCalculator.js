'use strict';

const fiboMaker = (number) => {
  let fibo = [0, 1];

  for (let i = 0; i < number - 1; i++) {
    fibo.push(fibo[i] + fibo[i + 1]);
  }
  return fibo[number - 1];
};

console.log(fiboMaker(5));
