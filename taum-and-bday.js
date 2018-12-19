'use strict';

const getOriginalCost = (black, white, bcost, wcost) => {
  return black * bcost + white * wcost;
};

const getCostWithPaint = (black, white, bcost, wcost, paintCost) => {
  let paintedPrice = 0;
  if (bcost < wcost) {
    paintedPrice += (bcost + paintCost) * white + bcost * black;
  } else {
    paintedPrice += (wcost + paintCost) * black + wcost * white;
    console.log('paintedPrice', paintedPrice);
    
  }
  return paintedPrice;
};

const taumBday = (black, white, bcost, wcost, paintCost) => {
  let original = getOriginalCost(black, white, bcost, wcost);
  let painted = getCostWithPaint(black, white, bcost, wcost, paintCost);

  console.log('painted', painted);
  
  return original < painted ? original : painted;
};

console.log(taumBday(742407782, 90529439, 847666641, 8651519, 821801924));

// 617318315833461267
