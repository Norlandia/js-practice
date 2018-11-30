'use srtrict';

let testString = 'cdefghmnopqrstuvw';

const gameOfThrones = (string) => {
  let letterObject = {};

  for (let letter of string) {
    letterObject[letter] ? ++letterObject[letter] : (letterObject[letter] = 1);
  }

  let valuesList = Object.values(letterObject);
  if (string.length % 2 === 0) {
    for (let i = 0; i < valuesList.length; i++) {
      return valuesList[i] === valuesList[i + 1] ? 'YES' : 'NO';
    }
  } else {
    valuesList.sort();

    if (valuesList[0] % 2 !== 0 && valuesList[0] !== valuesList[1]) {
      for (let i = 1; i < valuesList.length; i++) {
        if (valuesList[i + 1]) {
          return valuesList[i] === valuesList[i + 1] ? 'YES' : 'NO';
        } else {
          return 'YES';
        }
      }
    } else {
      return 'NO';
    }
  }
};

console.log(gameOfThrones(testString));
