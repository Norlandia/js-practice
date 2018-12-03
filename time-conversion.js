'use strict';

let timeToConvert = '12:05:45AM';

const convertTime = (timeToConvert) => {
  let hour = +timeToConvert.split(':')[0];

  if (hour !== 12 && timeToConvert.charAt(timeToConvert.length - 2) === 'P') {
    hour += 12;
  } else if (
    hour === 12 &&
    timeToConvert.charAt(timeToConvert.length - 2) === 'A'
  ) {
    hour = 0;
  }

  timeToConvert = timeToConvert.slice(2, timeToConvert.length - 2);
  return (hour < 10 ? `0${hour}` : hour) + timeToConvert;
};

console.log(convertTime(timeToConvert));
