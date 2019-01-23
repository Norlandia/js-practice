'use strict';

let testString = 'a,b$c';

const reverseStringWithoutSpecials = (text) => {
  let textArr = [];

  for (let letter of text) {
    textArr.push(letter);
  }

  return textArr
    .reverse()
    .toString()
    .replace(/\W/g, '');
};

console.log(reverseStringWithoutSpecials(testString));

