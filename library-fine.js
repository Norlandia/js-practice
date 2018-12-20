'use strict';

let returnDate = [6, 6, 2016];
let dueDate = [6, 6, 2015];

const libraryFine = (returned, due) => {

  for (let i = 0; i < dueDate.length; i++) {
    if (due[0] >= returned[0] && due[1] >= returned[1] && due[2] >= returned[2]) {
      return 0;
    }
    if (due[2] < returned[2]) {
      return 10000;
    } else if (due[1] < returned[1]) {
      return (returned[1] - due[1]) * 500;
    } else if (due[0] < returned[0]) {
      return (returned[0] - due[0]) * 15;
    }
  }
};
console.log(libraryFine(returnDate, dueDate));

// before due --> 0 

// after bnut same month and year --> 15 * day difference

// another month but still the same year --> 500 * month difference

// another year --> 10000
