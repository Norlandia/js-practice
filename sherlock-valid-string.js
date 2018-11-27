'use strict';

let testString = 'abcdefghhgfedecba';

function isValid(string) {
  let letterObject = {};

  for (let letter of string) {
    if (letterObject[letter]) {
      letterObject[letter]++;
    } else {
      letterObject[letter] = 1;
    }
  }

  let valueList = Object.values(letterObject);

  valueList = valueList.sort((a, b) => b - a);
  console.log(valueList);

  if (valueList[valueList.length - 1] === 1) {
    console.log(valueList);

    valueList = valueList.slice(0, valueList.length - 1);
    console.log(valueList);

    for (let i = 0; i < valueList.length - 1; ) {
      console.log(i);

      if (valueList[i] === valueList[i + 1]) {
        i++;
      } else {
        return 'NO';
      }
    }
    return 'YES';
  } else {
    valueList[0] = valueList[0] - 1;
    console.log(valueList);

    for (let i = 0; i < valueList.length - 1; ) {
      console.log(i);

      if (valueList[i] === valueList[i + 1]) {
        i++;
      } else {
        return 'NO';
      }
    }
    return 'YES';
  }
}

console.log(isValid(testString));

// valid if all letters appear equally return 'YES'
// valif if all letters appear equally and 1 letter + 1 return 'YES'

// else not valis return 'NO'

//aabbcc
//2 2 2
//sort 2 2 2
// egy fajta szam van az arrayben

//aaabbbcccj
//3 3 3 1
//sort 1 3 3 3
// 2 fajta szam 1es az elso elem utana mind egyezik
//levagom az elsot, mind egyezik

//2 2 2 2 1 1 1
//sort 1 1 1 2 2 2 2
// elso levagva , 1 1 2 2 2 2
//es meg mindig 2 fajta szam van
//azaz nem minden egyenlo
