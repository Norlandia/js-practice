'use strict';

let testStrings = ['aba', 'baba', 'aba', 'xzxb'];
let testQueries = ['aba', 'xzxb', 'ab'];

function matchingStrings(strings, queries) {
  let result = [];
  let stringObject = {};

  for (let string of strings) {
    if (stringObject[string]) {
      stringObject[string]++;
    } else {
      stringObject[string] = 1;
    }
  }

  for (let query of queries) {
    if (stringObject[query]) {
      result.push(stringObject[query]);
    } else {
      result.push(0);
    }
  }

  return result;
}

console.log(matchingStrings(testStrings, testQueries));
