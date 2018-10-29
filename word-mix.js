'use strict';

function mixWords(wordOne, wordTwo) {
  let result = '';

  for (let i = 0; i < wordOne.length || i < wordTwo.length; i++) {
    if (wordOne[i]) {
      result += (wordOne[i]);
    }
    if (wordTwo[i]) {
      result += (wordTwo[i]);
    }
  }
  return result;
}

console.log(mixWords('alma', 'traktor'));
