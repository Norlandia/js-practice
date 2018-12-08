'use strict'

const hurdleRace = (height, jumpUnit) => {
  let highest = Math.max(...height);
  return highest > jumpUnit ? highest - jumpUnit : 0;
}

console.log(hurdleRace([1, 6, 3, 5, 2], 4));

