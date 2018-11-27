'use strict';

let testString = 'aabbcd';

function isValid(string) {
  let letterObject = {};

  for (let letter of string) {
    if (letterObject[letter]) {
      letterObject[letter]++;
    } else {
      letterObject[letter] = 1;
    }
  }
  console.log(letterObject);
  
  
  
}

console.log(isValid(testString));

// valid if all letters appear equally return 'YES'
// valif if all letters appear equally and 1 letter + 1 return 'YES'

// else not valis return 'NO'

//console.log(Object.values(letterObject).every((value, i, array) => value === array[0]));
