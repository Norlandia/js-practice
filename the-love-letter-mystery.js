'use strict';

let testString = 'abc';

const loveLetterMytery = (string) => {
  let changeCount = 0;

  for (
    let i = 0, j = string.length - 1;
    i < Math.floor(string.length / 2);
    i++, j--
  ) {
    if (string.charCodeAt(i) !== string.charCodeAt(j)) {
      string.charCodeAt(j--);
      changeCount++;
      i--;
      j++;
    }
  }
  return changeCount;
};
console.log(loveLetterMytery(testString));

// abcd
// abcba


