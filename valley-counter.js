'use strict';

let n = 8;
let s = 'DDUUDDUDUUUD';

function valleyCounter(steps, path) {
  let upCounter = 0;
  let downCounter = 0;
  let valleyCounter = 0;

  let pathArray = path.split('');

  for (let i = 0; i < pathArray.length; i++) {
   if (upCounter === downCounter && pathArray[i] === 'D') {
      valleyCounter += 1;
    }
    if (pathArray[i] === 'D') {
      downCounter += 1;
    } else {
      upCounter += 1;
    }
  }
  return valleyCounter; 
}

console.log(valleyCounter(n, s));
 