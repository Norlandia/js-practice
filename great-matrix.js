'use strict';

let matrix1 = [[2, 1], [0, 1]];

let matrix2 = [[0, 3], [-1, 1]];

const greatMatrix = (m1, m2) => {
  let result = [];

  for (let i = 0; i < m1.length; i++) {
    let smallLists = [];
    for (let j = 0; j < m1[i].length; j++) {
      m1[i][j] > m2[i][j] ? smallLists.push(m1[i][j]) : smallLists.push(m2[i][j]);
    }
    result.push(smallLists);
  }
  return result;
};

console.log(greatMatrix(matrix1, matrix2));

// return ===> [ [2, 3], [0,1]]
