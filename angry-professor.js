'use strict';

let treshold = 3;
let arrivalTimes = [-1, -3, 4, 2];

const angryProfessor = (limit, arrivalList) => {
  let onTimeStudentCounter = 0;
  for (let i = 0; i < arrivalList.length; i++) {
    if (arrivalList[i] <= 0) {
      onTimeStudentCounter++;
    }
  }
  return onTimeStudentCounter >= limit ? 'NO' : 'YES';
};

console.log(angryProfessor(treshold, arrivalTimes));
