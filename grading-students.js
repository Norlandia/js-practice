'use strict';

let originalGrades = [73, 67, 38, 33];

function changeGrades(grades) {
  return grades.map((grade) => {
    if (grade >= 38 && grade % 5 >= 3) {
      grade += 5 - (grade % 5);
    }
    return grade;
  });
}

console.log(changeGrades(originalGrades));
