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

const friendFilter2 = (list) => {
  let friends = [];

  list.forEach((word) => {
    word.length === 4 ? friends.push(word) : null;
  });
  return friends;
};
console.log(friendFilter2(wordList));


const friendFilter3 = (list) => {
  return list.filter(word => word.length === 4);
}
console.log(friendFilter3(wordList));

