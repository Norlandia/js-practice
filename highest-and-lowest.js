'use strict';

let testArray = '4 5 29 54 4 0 -214 542 -64 1 -3 6 -6';

function highAndLow(numbers) {
  let result = '';
  let numbersList = numbers.split(' ');
  let max = Math.max(...numbersList);
  let min = Math.min(...numbersList);
  return (result += max + ' ' + min);
}

console.log(highAndLow(testArray));


const highAndLow2 = (numbers) => {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`; 
}

console.log(highAndLow2(testArray));
