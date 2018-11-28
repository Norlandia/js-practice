'use strict';

let testString = 'acxkz';

const getCharCodes = (string) => {
  return string.split('').map((letter) => letter.charCodeAt());
};

const absoluteDifference = (list) => {
  let absDiff = [];

  for (let i = 0; i < list.length - 1; i++) {
    absDiff.push(Math.abs(list[i] - list[i + 1]));
  }
  return absDiff;
};

const reverseList = (list) => {
  return list.reverse();
};

const isFunny = (string) => {
  let charList = getCharCodes(string);
  let absDiff = absoluteDifference(charList);
  let reversedList = reverseList(charList);
  let reversedAbsDiff = absoluteDifference(reversedList);

  for (let i = 0; i < absDiff.length; ) {
    if (absDiff[i] === reversedAbsDiff[i]) {
      i++;
    } else {
      return 'Not Funny';
    }
  }
  return 'Funny';
};

// other solution
const isFunny2 = (string) => {
  let charList = getCharCodes(string);
  let absDiff = absoluteDifference(charList);

  if (absDiff.length % 2 !== 0) {
    absDiff.splice(Math.ceil(absDiff.length / 2) - 1, 1);
  }
  for (let i = 0; i < absDiff.length && i < absDiff.length - i; ) {
    if (absDiff[i] === absDiff[absDiff.length - i - 1]) {
      i++;
    } else {
      return 'Not Funny';
    }
  }
  return 'Funny';
};

console.log(isFunny2(testString));
