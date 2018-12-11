'use strict';

let prisoners = 5;
let sweets = 7;
let chairNum = 3;

const saveThePrisoner = (prisoners, candy, start) => {
  return ((start - 1 + candy - 1) % prisoners) + 1;
};

console.log(saveThePrisoner(prisoners, sweets, chairNum));

