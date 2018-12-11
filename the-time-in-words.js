'use strict';

const timeInWords = (hour, min) => {
  let units = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'quarter',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  let tens = ['', '', 'twenty', 'half', 'fourty', 'fifty'];

  if (min === 0) {
    return `${units[hour]} o' clock`;
  } else if (min > 0 && min < 10) {
    return `${units[min]} minute past ${units[hour]}`;
  } else if (min >= 10 && min < 15) {
    return `${units[min]} minutes past ${units[hour]}`;
  } else if (min === 15) {
    return `${units[min]} past ${units[hour]}`;
  } else if (min > 15 && min < 30) {
    min = min
      .toString()
      .split('')
      .map((number) => +number);

    return `${tens[min[0]]} ${units[min[1]]} minutes past ${units[hour]}`;
  } else if (min === 30) {
    return `${tens[3]} past ${units[hour]}`;
  } else if (min === 40 || min === 50) {
    min = (60 - min)
      .toString()
      .split('')
      .map((number) => +number);

    return `${tens[min[0]]} minutes to ${units[hour + 1]}`;
  } else if (min > 30 && min < 40) {
    min = (60 - min)
      .toString()
      .split('')
      .map((number) => +number);

    return `${tens[min[0]]} ${units[min[1]]} minutes to ${units[hour + 1]}`;
  } else if (min === 45) {
    min = 60 - min;
    return `${units[min]} to ${units[hour + 1]}`;
  } else if (min > 40) {
    min = 60 - min;
    return `${units[min]} minutes to ${units[hour + 1]}`;
  }
};
console.log(timeInWords(5, 15)); //29 = 60-min ---> tens[2]units[9]

// 5:00 -> five o' clock

// 5:01 -> one minute past five
// 5:10 -> ten minutes past five

// 5:15 -> quarter past five

// 5:30 -> half past five

// 5:40 -> twenty minutes to six
// 5:45 -> quarter to six
// 5:47 -> thirteen to six
// 5:28 -> twentyeight minutes past five
