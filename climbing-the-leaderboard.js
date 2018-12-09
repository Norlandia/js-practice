'use strict';

let leaderboardScores = [100, 90, 90, 80, 75, 60];
let aliceScores = [50, 65, 77, 90, 102];

const climbingLeaderboard = (leaderboard, alice) => {
  let result = [];
  for (let i = 0; i < alice.length; i++) {
    leaderboard.push(alice[i]);
    leaderboard = [...new Set(leaderboard)];
    leaderboard.sort((a, b) => b - a);

    for (let j = 0; j < leaderboard.length; j++) {
      if (alice[i] === leaderboard[j]) {
        result.push(j + 1);
      }
    }
  }
  return result;
};

const climbingLeaderboard2 = (leaderboard, alice) => {
  let result = [];

  leaderboard = [...new Set(leaderboard)];

  for (let score of alice) {
    for (let i = 0; i < leaderboard.length; i++) {
      if (score >= leaderboard[i]) {
        result.push(i + 1);
        break;
      } else if (i === leaderboard.length - 1) {
        result.push(leaderboard.length + 1);
      }
    }
  }
  return result;
};



const binarySearch = (arr, i, score) => {
  let c = Math.floor(arr.length / 2);

  if (arr[c] === score) {
    return i + 1;
  } else if (arr.length === 1) {
    if (arr[0] > score) {
      return i + 1;
    } else {
      return i;
    }
  } else if (arr[c] > score) {
    return binarySearch(arr.slice(c), i + Math.ceil(c / 2), score);
  } else {
    return binarySearch(arr.slice(0, c), i - Math.floor(c / 2), score);
  }
};

const climbingLeaderboard3 = (leaderboard, alice) => {
  let result = [];

  leaderboard = [...new Set(leaderboard)];

  for (let score of alice) {
    result.push(
      binarySearch(leaderboard, Math.floor(leaderboard.length / 2), score)
    );
  }

  return result;
};
console.log(climbingLeaderboard3(leaderboardScores, aliceScores));

