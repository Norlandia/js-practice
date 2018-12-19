'use strict';

const sortingChallange = (number, list) => {

  for (let i = 0; i < list.length; i++) {
    if (list[i] === number ) {
      return i;
    }
  }
}
console.log(sortingChallange(4, [1, 4, 5, 7, 9, 12]));

