'use strict';

let testArray = [2, 3, 1, 2, 3, 2, 3, 3];
let cases = [4, 6];

const serviceLane = (roadWidth, inOut) => {
  roadWidth = roadWidth.slice(inOut[0], inOut[1] + 1);
  let min = roadWidth[0];

  for (let width of roadWidth) {
    min > width ? min = width : min;
  }
  return min;
};
console.log(serviceLane(testArray, cases));
