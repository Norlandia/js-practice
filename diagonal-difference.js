'use strict';

let testMatrix = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

function diagonalDifference(matrix) {
  let firstSum = 0;
  let secondSum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j) {
        firstSum += matrix[i][j];
      }

      if (j === matrix.length - 1 - i) {
        secondSum += matrix[i][j];
      }
    }
  }
  return Math.abs(firstSum - secondSum);
}

console.log(diagonalDifference(testMatrix));
