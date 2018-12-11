'use strict';

let adDays = 3;

const viralAdvertising = (days) => {
  let shared = 5;
  let liked = 0;
  let cumulative = 0;

  for (let i = 1; i <= days; i++) {
    liked = Math.floor(shared / 2);
    cumulative += liked; 
    shared = Math.floor(liked * 3);
  }
  return cumulative;
};
console.log(viralAdvertising(adDays));
