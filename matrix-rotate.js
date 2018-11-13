'use strict';

let testMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function matrixRotate(matrix) {
  let rotatedMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      row.push(matrix[matrix.length - j - 1][i]);
    }
    rotatedMatrix.push(row);
  }

  return rotatedMatrix;
}

console.log(matrixRotate(testMatrix));

// [7, 4, 1]
// [8, 5, 2]
// [9, 6, 3]
