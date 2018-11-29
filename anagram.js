'use strict';

let testString = 'xyyx';

const anagram = (string) => {
  let counter = 0;
  if (string.length % 2 === 0) {
    let part1 = string.substr(0, string.length / 2);
    let part2 = string.substr(string.length / 2);

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < part1.length; i++) {
      obj1[part1[i]] = obj1[part1[i]] ? ++obj1[part1[i]] : 1;
      obj2[part2[i]] = obj2[part2[i]] ? ++obj2[part2[i]] : 1;
    }

    for (let entry of Object.entries(obj1)) {
      let obj1Key = entry[0];
      if (obj2[obj1Key]) {
        counter += Math.min(obj1[obj1Key], obj2[obj1Key]);
      }
    }

    return part1.length - counter;
  } else {
    return -1;
  }
};

console.log(anagram(testString));

