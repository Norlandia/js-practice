'use strict';

let stringToCheck = 'hereiamstackerank';

function hackerrankInString(string) {
  return string.match(
    /(\w+)?h(\w+)?a(\w+)?c(\w+)?k(\w+)?e(\w+)?r(\w+)?r(\w+)?a(\w+)?n(\w+)?k(\w+)?/g
  )
    ? 'YES'
    : 'NO';
}
console.log(hackerrankInString(stringToCheck));

