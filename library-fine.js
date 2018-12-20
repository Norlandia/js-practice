'use strict';

const libraryFine = (rd1, rm1, ry1, dd2, dm2, dy2) => {

    if (dd2 >= rd1 && dm2 >= rm1 && dy2 >= ry1) {
      return 0;
    }
    if (dy2 < ry1) {
      return 10000;
    } else if (dm2 < rm1) {
      return (rm1 - dm2) * 500;
    } else if (dd2 < rd1) {
      return (rd1 - dd2) * 15;
    }
};
console.log(libraryFine(9, 6, 2015, 6, 6, 2015));

// before due --> 0 

// after bnut same month and year --> 15 * day difference

// another month but still the same year --> 500 * month difference

// another year --> 10000
