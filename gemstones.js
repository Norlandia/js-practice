'use strict';

let rocks = ['abcdde', 'baccd', 'eeabg'];

const gemstones = (list) => {
  let gemstones = 0;
  let letterObject = {};

  for (let letter of list[0]) {
    if (!letterObject[letter]) {
      letterObject[letter] = 1;
    }
  }

  for (let i = 1; i < list.length; i++) {
    let mySet = new Set([...list[i]]);
    for (let letter of mySet) {
      if (letterObject[letter]) {
        letterObject[letter]++;
      }
    }
  }

  for (let value of Object.values(letterObject)) {
    value === list.length ? gemstones++ : gemstones;
  }
  return gemstones;
};

const gemstones2 = (list) => {
  let gemstones = 0;
  let letterObject = {};

  for (let i = 0; i < list.length; i++) {
    let mySet = new Set([...list[i]]);
    for (let letter of mySet) {
      if (letterObject[letter]) {
        letterObject[letter]++;
      } else {
        letterObject[letter] = 1;
      }
    }
  }
  for (let value of Object.values(letterObject)) {
    value === list.length ? gemstones++ : gemstones;
  }
  return gemstones;
};
console.log(gemstones2(rocks));
