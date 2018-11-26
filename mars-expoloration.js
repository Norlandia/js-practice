'use strict';

let sosString = 'SOSSOT';

function marsExploration(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== 'S' && s[i] !== 'O') {
      result++;
    }
  }
  return result;
}

console.log(marsExploration(sosString));

// S O S   S O S   S O S  length = 9 {9/3 = 3 SOS}
// 0 1 2   3 4 5   6 7 8
//6s 3o

//4sos.length = 12; o = s.length / 3 = 4,  s = s.length / 3 * 2
