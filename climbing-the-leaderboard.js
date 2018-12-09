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

console.log(climbingLeaderboard2(leaderboardScores, aliceScores));
