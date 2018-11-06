'use strict';

let testList = [1, 1, 1, 1, 2, 3, 3, 3];
let occurrance = 4;

function deleteNth(list, n) {
  let listObject = {};
  let result = [];

  list.map((number) => {
    if (listObject[number]) {
      listObject[number]++;
    } else {
      listObject[number] = 1;
    }
  });

  Object.keys(listObject).map((key) => {
    for (let i = 0; i < Math.min(listObject[key], n); i++) {
      result.push(+key);
    }
  });

  return result;
}

console.log(deleteNth(testList, occurrance));
