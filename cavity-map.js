'use strict';

let testArray = ['1112', '1912', '1892', '1234'];

const cavityMap = (grid) => {
  let result = [];
  
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split('');
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = +grid[i][j];
    }
  }
  
  let string = '';

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j+1] && grid[i][j+2] && grid[i][j] < grid[i][j + 1] && grid[i][j + 1 ] > grid[i][j + 2]) {
        grid[i][j + 1]= 'X';
      } 
      
      grid[i][j] = grid[i][j].toString();
      string += grid[i][j];
      console.log(string);
    }
    result.push(string)
    string = '';
  }

  return result;  
};
console.log(cavityMap(testArray));
