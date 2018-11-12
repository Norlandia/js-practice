'use strict';

let cloudArray = [0, 0, 1, 0, 0, 1, 0];

function jumpingOnClouds(clouds) {
  let jumpCount = 0;
  for (let i = 0; i < clouds.length; i++) {
    console.log('index', i);
    
    if (clouds[i + 2] === 0) {
      i = i + 1;
      jumpCount += 1;
    } else {
      jumpCount += 1;
    }
  }

  return jumpCount - 1;
}

console.log(jumpingOnClouds(cloudArray));
