'use strict';

let numbers = [1, 2, 3, 4, 5];

const modifyArray = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    nums[i] % 2 === 0 ? (nums[i] *= 2) : (nums[i] *= 3);
  }
  return nums;
};

console.log(modifyArray(numbers));
