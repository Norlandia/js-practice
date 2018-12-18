'use strict';

const isSameLength = (sticks) => {
  for (let i = 0; i < sticks.length; i++) {
    if (sticks[i] !== sticks[i + 1]) {
      return false;
    }
  }
  return true;
};

const cutTheSticks = (sticks) => {
  let result = [];
  while (!isSameLength(sticks)) {
    result.push(sticks.length);
    let min = Math.min(...sticks);
    for (let i = 0; i < sticks.length; i++) {
      sticks[i] -= min;

      if (sticks[i] === 0) {
        sticks.splice(i, 1);
        i--;
      }
    }
  }
  return result;
};
console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));

// log length of array
// find min value
// deduct min value from each element
// remove sticks[i] === 0 from array
