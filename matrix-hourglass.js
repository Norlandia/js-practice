'use strict';

let testMatrix = [
  [1 ,1 ,1 ,0 ,0 ,0],
  [0 ,1 ,0 ,0 ,0 ,0],
  [1 ,1 ,1 ,0 ,0 ,0],
  [0 ,0 ,2 ,4 ,4 ,0],
  [0 ,0 ,0 ,2 ,0 ,0],
  [0 ,0 ,1 ,2 ,4 ,0]
];


//counts sum of the hourglass shape in athe 3x3 matrix
const hourglassSum = (smallMatrix) => {
  let hourglassSum = 0;
  for (let i = 0; i < smallMatrix.length; i++) {
    for (let j = 0; j < smallMatrix[i].length; j++) {
      hourglassSum += smallMatrix[i][j];
    }
  }
  return hourglassSum - smallMatrix[1][0] - smallMatrix[1][2];
};

//creates a 3x3 matrix
const makeSmallMatrix = (largeMatrix, x, y) => {
  let small = [];

  for (let i = x; i <= x + 2; i++) {
    let row = [];
    for (let j = y; j <= y + 2; j++) {
      row.push(largeMatrix[i][j])
    }
    small.push(row);
  }
  return small;  
}



//moves 3x3 hg, adds sums to array, returns largest sum
const getLargestSum = (largeMatrix) => {
  let hourglassSumList = [];

  for (let i = 0; i < largeMatrix.length; i++) {
    for (let j = 0; j < largeMatrix[i].length; j++) {
      if (largeMatrix[i + 2] && largeMatrix[i + 2][j + 2]) {
        let smallMatrix = makeSmallMatrix(largeMatrix, i, j);
        let smallMatrixSum = hourglassSum(smallMatrix);
        hourglassSumList.push(smallMatrixSum); 
      }
    }
  }

  return Math.max(...hourglassSumList);
}

console.log(getLargestSum(testMatrix));

