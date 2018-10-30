'use strict';

let wordList = ['Ryan', 'Kieran', 'Jason', 'Yous'];

function friendFilter(list) {
  let friends = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].length === 4) {
      friends.push(list[i]);
    }
  }

  return friends;
}

console.log(friendFilter(wordList));
