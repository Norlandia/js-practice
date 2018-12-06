'use strict';

let allPages = 5;
let pageToOpen = 4;

const drawingBook = (pages, turnTo) => {
  let turnCountFromFront = 0;

  if (turnTo === 1) {
    return 0;
  } else if (turnTo % 2 === 0) {
    turnCountFromFront = turnTo / 2;
  } else {
    turnCountFromFront = (turnTo - 1) / 2;
  }

  if (Math.floor(pages / 2) - turnCountFromFront > turnCountFromFront) {
    return turnCountFromFront;
  } else {
    return Math.floor(pages / 2) - turnCountFromFront;
  }
};

console.log(drawingBook(allPages, pageToOpen));

