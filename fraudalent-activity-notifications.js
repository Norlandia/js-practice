'use strict';

function getTrailingDays(expenditure, start, amount) {

  expenditure.slice(start, amount);
  let trailingDays = [];
  for (let i = start; i < start + amount; i++) {
    trailingDays.push(expenditure[i]);
  }
  return trailingDays;
}

function getMedian(trailingDays) {
  trailingDays.sort((a, b) => a - b);
  return trailingDays[(trailingDays.length - 1) / 2];
}

function isMedianDouble(median, currentDay) {
  return median * 2 <= currentDay;
}

function countNotifications(expenditure, d) {
  let notificationCount = 0;

  for (let i = d; i < expenditure.length; i++) {
    let trailingDays = getTrailingDays(expenditure, i - d, d);
    let median = getMedian(trailingDays);
    let isFraudalent = isMedianDouble(median, expenditure[i]);

    if (isFraudalent) {
      notificationCount++;
    }
  }
  return notificationCount;
}

console.log(countNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));
