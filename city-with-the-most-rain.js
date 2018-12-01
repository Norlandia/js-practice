'use strict';

let testString =
  '2018-01-01  Budapest    RAINY\n2018-01-03  Debrecen    SUNNY\n2018-01-04  Debrecen    SUNNY\n2018-01-05  Gyor    RAINY\n2018-01-06  Gyor    RAINY\n2018-01-07  Gyor    CLOUDY\n2018-01-08  Pecs    CLOUDY\n2018-01-09  Pecs    RAINY\n2018-01-10  Pecs    CLOUDY\n2018-01-11  Budapest    CLOUDY\n2018-01-12  Debrecen    RAINY\n2018-01-13  Gyor    CLOUDY\n2018-01-14  Pecs    CLOUDY\n2018-01-15  Pecs    RAINY\n2018-01-16  Budapest    RAINY\n2018-01-17  Debrecen    RAINY\n2018-01-18  Gyor    RAINY\n2018-01-19  Budapest    CLOUDY\n2018-01-20  Budapest    SUNNY\n2018-01-21  Debrecen    CLOUDY\n2018-01-23  Gyor    CLOUDY\n2018-01-24  Gyor    SUNNY\n2018-01-25  Gyor    CLOUDY\n2018-01-26  Pecs    SUNNY';

const mostRainyDays = (file) => {
  let cities = [];
  let cityObject = {};
  let max;

  file = file.split('\n').filter((element) => element.match(/RAINY/g));
  for (let i = 0; i < file.length; i++) {
    cities.push(file[i].match(/[A-Z]{1}[a-z]+/g)[0]);
  }

  for (let city of cities) {
    cityObject[city] ? ++cityObject[city] : (cityObject[city] = 1);
  }

  Object.entries(cityObject).forEach((entry) => {
    if (!max || entry[1] > max[1]) {
      max = entry;
    }
  });
  return max[0];
};

console.log(mostRainyDays(testString));
