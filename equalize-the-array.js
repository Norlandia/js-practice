'use strict'

const equalizeArray = (list) => {
  let numberObj = {};
  let result = 0;
  let highest = 0;

  for (let number of list) {
    numberObj[number] ? ++numberObj[number] : numberObj[number] = 1;
  }
  
  for (let entry of Object.entries(numberObj)) {
    if (entry[1] > highest) {
      highest = entry[1];
    }

    result += entry[1];
  }
   return result - highest;
}

console.log(equalizeArray([3, 3, 2, 1, 3]));
