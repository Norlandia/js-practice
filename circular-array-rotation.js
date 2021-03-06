'use strict';

let testArray = [1, 2, 3];
let rotationCount = 2;
let queries = [0, 1, 2];

const circularArrayRotation = (list, rotation, queries) => {
  let result = [];
  for (let i = 0; i < rotation % list.length; i++) {
    let last = list.pop();
    list.unshift(last);
  }

  for (let i = 0; i < queries.length; i++) {
    result.push(list[queries[i]]);
  }
  return result;
};

console.log(circularArrayRotation(testArray, rotationCount, queries));

// 1 - list.length 3
//rotation 2, 5, 8, 32 ---> 2x rotation
