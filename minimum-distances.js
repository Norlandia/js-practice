'use strict';

const minimumDistance = (list) => {
  let result = list.length;

  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] === list[j] && j - i < result) {
        result = j - i;
      }
    }
  }
  return result === list.length ? -1 : result;
};
console.log(minimumDistance([7, 1, 3, 4]));
