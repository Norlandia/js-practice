'use strict';

let testString = '1234';

const separateNumbers = (string) => {
  string = string.split('');

  string.map((element, i) => (string[i] = parseInt(element, 10)));
  console.log(string);

  for (let i = 0; i < string.length; ) {
    if (string[i] + 1 === string[i + 1]) {
      i++;
    } else {
      return 'NO'
    }
  }
  return `YES ${string[0]}`


};

console.log(separateNumbers(testString));


