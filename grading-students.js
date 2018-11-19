'use strict';

let originalGrades = [73, 67, 38, 33];

function changeGrades(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      if (grades[i] % 5 >= 3) {
        grades[i] += 5 - (grades[i] % 5);
      }
    }
    return grades;
  }
}

console.log(changeGrades(originalGrades));
