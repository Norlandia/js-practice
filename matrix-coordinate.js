'use strict';

let matrix = [[1, 2, 3, 4], [2, 3, 4, 8], [3, 4, 5, 9]];

let coordinates = [1, 1];

function matrixCoordinate(matrixInput, coordinateInput) {
  let result = 0;
  let x = coordinateInput[0];
  let y = coordinateInput[1];

  result += matrixInput[x - 1] && matrixInput[x - 1][y - 1] ? matrixInput[x - 1][y - 1] : 0;
  result += matrixInput[x - 1] && matrixInput[x - 1][y] ? matrixInput[x - 1][y] : 0;
  result += matrixInput[x - 1] && matrixInput[x - 1][y + 1] ? matrixInput[x - 1][y + 1] : 0;
  result += matrixInput[x] && matrixInput[x][y - 1] ? matrixInput[x][y - 1] : 0;
  result += matrixInput[x] && matrixInput[x][y + 1] ? matrixInput[x][y + 1] : 0;
  result += matrixInput[x + 1] && matrixInput[x + 1][y - 1] ? matrixInput[x + 1][y - 1] : 0;
  result += matrixInput[x + 1] && matrixInput[x + 1][y] ? matrixInput[x + 1][y] : 0;
  result += matrixInput[x + 1] && matrixInput[x + 1][y + 1] ? matrixInput[x + 1][y + 1] : 0;

  return result;
}

console.log(matrixCoordinate(matrix, coordinates));


const matrixCoordinate2 = (matrixInput, coordinateInput) => {
  let result = 0;
  let x = coordinateInput[0];
  let y = coordinateInput[1];

  for (let i = -1; i <= 1; i++ ) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      result += matrixInput[x + i] && matrixInput[x + i][y + j] ? matrixInput[x + i][y + j] : 0;
    }
  }
  return result;
};

console.log(matrixCoordinate2(matrix, coordinates));

