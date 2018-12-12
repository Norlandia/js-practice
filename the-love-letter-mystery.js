'use strict';

let testString = 'cba';

const loveLetterMytery = (string) => {
  let changeCount = 0;

  for (let i = 0; i < Math.floor(string.length / 2); i++) {

    changeCount += Math.abs(string.charCodeAt(string.length - i - 1) - string.charCodeAt(i));
  }
  return changeCount;
};
console.log(loveLetterMytery(testString));
