'use strict'

let originalMatrix = []

const getTransposed = (matrix) => {
  let newMatrix = []

  if (!matrix.length) {
    return matrix
  }
  
  for (let i = 0; i < matrix[0].length; i++) {
    let row = [];
    newMatrix.push(row)
  }

  for (let i = 0; i < matrix.length; i++) {
    if (!matrix[i].length) {
      let row = []
      newMatrix.push(row)
      return newMatrix
    }

    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[j].push(matrix[i][j])
    }
  }
  return newMatrix
}

console.log(getTransposed(originalMatrix))

