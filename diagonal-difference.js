'use strict';

let testMatrix = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

function diagonalDifference(matrix) {
  let firstSum = 0;
  let secondSum = 0;

  for (let i = 0; i < matrix.length; i++) {
    firstSum += matrix[i][i];
    secondSum += matrix[i][matrix.length - 1 - i];
  }
  return Math.abs(firstSum - secondSum);
}

console.log(diagonalDifference(testMatrix));
