'use strict';

let originalGrades = [73, 67, 38, 33];

function changeGrades(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      if (grades[i] % 5 === 3) {
        grades[i] += 2;
      } else if (grades[i] % 5 === 4) {
        grades[i] += 1;
      }
    }
  }
  return grades;
}

console.log(changeGrades(originalGrades));
// 0 0 0 2 1 0 0 0 2 1 
