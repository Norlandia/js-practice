'use strict';

const sherlockArray = (list) => {
  let subArr1 = [];
  let subArr2 = [];

  for (let i = 0; i < list.length; i++) {
    if (i === list.length - 1) {
      subArr1 = 0;
    } else {
      subArr1 = list.slice(i + 1).reduce((a, b) => a + b);
    }
    console.log('subArr1', subArr1);

    if (i === 0) {
      subArr2 = 0;
    } else {
      subArr2 = list.slice(0, i).reduce((a, b) => a + b);
    }
    console.log('subArr2', subArr2);
    if (subArr1 === subArr2) {
      console.log('result', subArr1[0], subArr2[0]);
      
      return 'YES';
    }
  }
  return 'NO';
};

console.log(sherlockArray([2, 0, 0, 0]));

// 233, 33, 3, 0
// 0, 1, 12, 123
