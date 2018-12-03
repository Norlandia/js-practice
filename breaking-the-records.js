'use strict';

let testScores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

const breakingRecords = (scoreList) => {
  let result = [];
  let lowestCounter = 0;
  let highestCounter = 0;
  let tempScore = scoreList[0];

  for (let i = 1; i < scoreList.length; i++) {
    if (tempScore < scoreList[i]) {
      highestCounter++;
      tempScore = scoreList[i];
    }
  }

  tempScore = scoreList[0];

  for (let i = 1; i < scoreList.length; i++) {
    if (tempScore > scoreList[i]) {
      lowestCounter++;
      tempScore = scoreList[i];
    }
  }
  result.push(highestCounter, lowestCounter);
  return result;
};

console.log(breakingRecords(testScores));
