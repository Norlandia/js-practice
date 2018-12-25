'use strict';

let c = 2;
let k = [0, 0, 1, 0, 0, 1, 1, 0];

const jumpingOnClouds = (jumpSize, clouds) => {
  let energy = 100;

  for (let i = 0; (i + jumpSize) % clouds.length; i++) {
    energy -= 1;
    if (clouds[i + jumpSize] === 1) {
      energy -= 2;
    }
    i += jumpSize - 1;
    console.log(energy);
  }
  clouds[0] === 1 ? (energy -= 3) : (energy -= 1);
  return energy;
};
console.log(jumpingOnClouds(c, k));
