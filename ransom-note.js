'use strict';

let m = ['give', 'me', 'hello', 'grand', 'today', 'night'];
let n = ['give', 'two', 'alma', 'today'];

function checkMagazine(magazine, note) {
  let magazineObj = {};

  for (let word of magazine) {
    if (magazineObj[word]) {
      magazineObj[word]++;
    } else {
      magazineObj[word] = 1;
    }
  }

  for (let i = 0; i < n.length; i++) {
    if (magazineObj[n[i]]) {
      magazineObj[n[i]]--;
    } else {
      console.log('No');
      return;
    }
  }
  console.log('Yes');
}
checkMagazine(m, n);

// if (magazineOnj[n[i]]) {
//
//}
