'use strict';

let letterHeights = [
  1,
  3,
  1,
  3,
  1,
  4,
  1,
  3,
  2,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
];

let testWord = 'abc';

const designerPdfViewer = (heightList, word) => {
  let charcodeList = [];

  for (let i = 0; i < word.length; i++) {
    charcodeList.push(heightList[word.charCodeAt(i) - 97]);
  }

  return Math.max(...charcodeList) * charcodeList.length;
};

console.log(designerPdfViewer(letterHeights, testWord));
