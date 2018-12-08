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

const designerPdfViewer2 = (h, word) => {
  return (
    word
      .split('')
      .reduce(
        (m, c) => (h[c.charCodeAt(0) - 97] > m ? h[c.charCodeAt(0) - 97] : m),
        0
      ) * word.length
  );
};

const designerPdfViewer3 = (h, word) => {
  return (
    Math.max(...word.split('').map((c) => h[c.charCodeAt(0) - 97])) *
    word.length
  );
};

// console.log(designerPdfViewer(letterHeights, testWord));
console.log(designerPdfViewer3(letterHeights, testWord));
