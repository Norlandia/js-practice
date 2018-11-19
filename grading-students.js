'use strict';

let originalGrades = [73, 67, 38, 33];

function changeGrades(grades) {
  return grades.map((grade) =>
    grade >= 38 && grade % 5 >= 3 ? grade + 5 - (grade % 5) : grade
  );
}

console.log(changeGrades(originalGrades));
