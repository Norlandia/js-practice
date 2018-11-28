'use strict';

let testString = 'aaabbb';

const anagram = (string) => {
  let counter = 0;
  if (string.length % 2 === 0) {
    let part1 = string.substr(0, string.length / 2);
    let part2 = string.substr(string.length / 2);

    for (let i = 0; i < part1.length; i++) {
      if (part1[i] !== part2[i]) {
        counter++;
      }
    }
    return counter;
  } else {
    return -1;
  }
};

console.log(anagram(testString));

