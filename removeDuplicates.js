'use strict';

let testArray = ['delhi', 'kanpur', 'kanpur', 'goa', 'delhi', 'new york'];

const removeDuplicates = (list) => {
  return [...new Set(list)];
};
console.log(removeDuplicates(testArray));
