'use strict';

//irj egy functiont, ami paros szam eseten 2-ot ugrik, paratlan szam eseten 1-et, es ezeket a szamokat osszeadja.

let testArray = [2, 7, 3, 4, 8, 2, 5, 7];

function jumpAndSum(list) {
  let jumpSum = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
      jumpSum += list[i];
      i = i + 1;
    } else {
      jumpSum += list[i];
    }
  }
  return jumpSum;
}

console.log(jumpAndSum(testArray));
