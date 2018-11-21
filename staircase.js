'use strict';

let size = 6;

function staircase(number) {
  for (let i = 1; i <= number; i++) {
    let row = '';

    for (let j = 1; j <= number; j++) {
      if (j <= number - i) {
        row += ' ' ;
      } else {
        row += '#';
      }
    }
    console.log(row);
  }
}

staircase(size);

