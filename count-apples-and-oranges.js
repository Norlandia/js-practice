'use strict';

let s = 7;
let t = 11;
let a = 5;
let b = 15;
let mDistanceFromA = [-2, 2, 1];
let nDistanceFromB = [5, -6];

function countApplesAndOranges(
  houseStartPoint,
  houseEndPoint,
  appleTree,
  orangeTree,
  apples,
  oranges
) {
  let appleCounter = 0;
  let orangeCounter = 0;

  for (let i = 0; i < apples.length; i++) {
    if (
      appleTree + apples[i] >= houseStartPoint &&
      appleTree + apples[i] <= houseEndPoint
    ) {
      appleCounter++;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    if (
      orangeTree + oranges[i] >= houseStartPoint &&
      orangeTree + oranges[i] <= houseEndPoint
    ) {
      orangeCounter++;
    }
  }

  console.log(appleCounter);
  console.log(orangeCounter);
}

countApplesAndOranges(s, t, a, b, mDistanceFromA, nDistanceFromB);

//calculate the number of apples and oranges that fall on the house
//print 2 lines, each representing the number of apples/ oranges that fall on the house
