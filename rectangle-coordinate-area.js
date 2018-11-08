'use strict';

let testRectangle = [[0, 0], [0, 2], [2, 2], [2, 0]];

function getArea(coordinates) {
  let shoelace = 0;
  for (let i = 0; i < coordinates.length - 1; i++) {
    shoelace +=
      coordinates[i][0] * coordinates[i+1 % coordinates.length][1] - coordinates[i][1] * coordinates[i+1 % coordinates.length][0];
  }

  return (Math.abs(shoelace / 2));
}

console.log(getArea(testRectangle));

//return 4.0
// area = (x1 * y2 - y1 * x2) + (x2 * y3 - y2 * x3) + (x3 * y4 - y3 * x4) + (x4 * y1 + y4 * x1)

//  let shoelace =
//(coordinates[0][0] * coordinates[1][1]) - (coordinates[0][1] * coordinates[1][0]) +
//(coordinates[1][0] * coordinates[2][1]) - (coordinates[1][1] * coordinates[2][0]) +
//(coordinates[2][0] * coordinates[3][1]) - (coordinates[2][1] * coordinates[3][0]) +
//(coordinates[3][0] * coordinates[0][1]) - (coordinates[3][1] * coordinates[0][0]);
