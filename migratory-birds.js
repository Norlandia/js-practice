'use strict';

let birds = [1, 1, 1, 4, 4, 4, 5, 3];

const migratoryBirds = (birdList) => {
  let birdFrequency = {};

  for (let bird of birdList) {
    birdFrequency[bird] ? ++birdFrequency[bird] : (birdFrequency[bird] = 1);
  }

  let birdEntries = Object.entries(birdFrequency);
  let result = birdEntries[0];

  for (let i = 1; i < birdEntries.length; i++) {
    if (birdEntries[i][1] > result[1]) {
      result = birdEntries[i];
    } else if (birdEntries[i][1] === result[1]) {
      birdEntries[i][0] < result[0] ? (result = birdEntries[i]) : result;
    }
  }

  return result[0];
};

console.log(migratoryBirds(birds));
