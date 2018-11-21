'use strict';

let testPassword = 'Ab1';

function isStrongPassword(password) {
  let result = 0;
  let counter = 0;

  if (password.length < 6) {
   result = (6 - password.length);
  } 
  if (!password.match(/\d/g)) {
    counter++;
  } 
  if (!password.match(/[A-Z]/g)) {
    counter++;
  } 
  if (!password.match(/[a-z]/g)) {
    counter++;
  }
   if (!password.match(/\W/g)) {
    counter++;
  } 

  return Math.max(result, counter);
}

console.log(isStrongPassword(testPassword));

// 1 digit \d
// 1 one lowercase letter \[a-z]
// 1 uppercase letter \[A-Z]
// 1 special character \W
// 6 characters .length

// return the number of minimum characters to add

// 4 then 6 - password.length
// 3 then 6 - password.length 
