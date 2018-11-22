'use strict';

let testString =
  'acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj';

function superReducedString(string) {
  string = string.split('');

  for (let i = 1; i < string.length; ) {
    if (string[i - 1] === string[i]) {
      string.splice(i - 1, 2);
      i = 1;
    } else {
      i++;
    }
  }
  return string.length ? string.join().replace(/\W/g, '') : 'Empty String';
}

console.log(superReducedString(testString));
