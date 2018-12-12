'use strict';

const reverseString = (word) => {
  return word.split('').reverse().toString().replace(/\W/g, '');
};
console.log(reverseString('norlandia'));
