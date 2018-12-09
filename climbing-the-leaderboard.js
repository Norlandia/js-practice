'use strict';

let leaderboardScores = [100, 100, 50, 40, 40, 20, 10];
let aliceScores = [5, 25, 50, 120];

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



const binarySearch = (arr, start, end, score) => {
  let c = Math.floor((start + end) / 2);

  if (arr[c] === score) {
    return c;
  } else if (end - start === 1) {
    if (score < arr[end]) {
      return end + 1;
    } else if (score < arr[start]) {
      return end;
    } else {
      return start;
    }
  } else if (score < arr[c]) {
    return binarySearch(arr, c, end, score);
  } else {
    return binarySearch(arr, start, c, score);
  }
};

const climbingLeaderboard3 = (leaderboard, alice) => {
  let result = [];

  leaderboard = [...new Set(leaderboard)];

  for (let score of alice) {
    result.push(
      binarySearch(leaderboard, 0, leaderboard.length - 1, score) + 1
    );
  }

  return result;
};
console.log(climbingLeaderboard3(leaderboardScores, aliceScores));
