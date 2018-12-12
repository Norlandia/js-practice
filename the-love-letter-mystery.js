'use strict';

let testString = 'cba';

const loveLetterMytery = (string) => {
  let changeCount = 0;

  for (
    let i = 0, j = string.length - 1;
    i < Math.floor(string.length / 2);
    i++, j--
  ) {
    let begin = string.charCodeAt(i);
    let end = string.charCodeAt(j);
      changeCount += Math.abs(end - begin);
  }
  return changeCount;
};
console.log(loveLetterMytery(testString));

