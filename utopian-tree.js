'use strict';

const utopianTree = (period) => {
  let utopianTree = 1;

  for (let i = 1; i <= period; i++) {
    if (i % 2 !== 0) {
      utopianTree *= 2;
    } else {
      utopianTree += 1;
    }
  }
  return utopianTree;
};

console.log(utopianTree(4));

// 0 -> 1
// 1 -> 1 * 2 = 2
// 2 -> 2 + 1 = 3
// 3 -> 3 * 2 = 6
// 4 -> 6 + 1 = 7
