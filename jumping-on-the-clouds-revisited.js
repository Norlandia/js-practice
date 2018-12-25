'use strict';

let c = 2;
let k = [0, 0, 1, 0, 0, 1, 1, 0];

const jumpingOnClouds = (jumpSize, clouds) => {
  let energy = 100;

  for (let i = 0; (i + jumpSize) % clouds.length; i++) {
    clouds[i + jumpSize] === 1 ? (energy -= 3) : (energy -= 1);
    i += jumpSize - 1;
  }
  clouds[0] === 1 ? (energy -= 3) : (energy -= 1);
  return energy;
};
console.log(jumpingOnClouds(c, k));
