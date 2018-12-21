'use strict';

const libraryFine = (rd, rm, ry, dd, dm, dy) => {
  // if (dd >= rd && dm >= rm && dy >= ry) {
  //   return 0;
  // }

  if (dy < ry) {
    return 10000;
  } else if (dm < rm) {
    return (rm - dm) * 500;
  } else if (dd < rd) {
    return (rd - dd) * 15;
  }

  if (dy > ry) {
    return 0;
  } else if (dm > rm) {
    return 0;
  } else if (dd > rd) {
    return 0;
  } else if (dy === ry && dm === rm && dd === rd) {
    return 0;
  }
};
console.log(libraryFine(2, 7, 1014, 1, 1, 1015));

// before due --> 0

// after bnut same month and year --> 15 * day difference

// another month but still the same year --> 500 * month difference

// another year --> 10000

// FIX IF THE BOOK WAS GIVEN BACK BEFORE DUE DATE

//returned
//due
