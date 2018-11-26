'use strict';

let sosString = 'SOSOOSOSOSOSOSSOSOSOSOSOSOS';

function marsExploration(s) {
  let result = 0;

  s = s.match(/.{1,3}/g);

  for (let i = 0; i < s.length; i++) {
    
    if (s[i][0] !== 'S') {
      result++;
    } 
    if (s[i][1] !== 'O') {
      result++;
    }
     if (s[i][2] !== 'S') {
      result++;
    }
  }
  return result;
}

console.log(marsExploration(sosString));
