'use strict';

let testString = '0101010';

const beautifulBinaryString = (string) => {
  let counter = 0;
  string = string.split('').map((string) => +string);

  for (let i = 0; i < string.length; i++) {
    if (string[i] === 0 && string[i + 1] === 1 && string[i + 2] === 0) {
      string[i + 2] = 1;
      counter++;
    }
  }
  return counter;
};

console.log(beautifulBinaryString(testString));
