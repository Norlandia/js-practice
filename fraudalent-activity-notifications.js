'use strict';

function getTrailingDays(expenditure, start, end) {
  return expenditure.slice(start, end);
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
    let trailingDays = getTrailingDays(expenditure, i - d, i);
    let median = getMedian(trailingDays);
    let isFraudalent = isMedianDouble(median, expenditure[i]);

    if (isFraudalent) {
      notificationCount++;
    }
  }
  return notificationCount;
}

console.log(countNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));
