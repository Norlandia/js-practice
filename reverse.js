'use strict';

let letters = ['n', 'o', 'r', 'l', 'a', 'n', 'd', 'i', 'a'];

const reverse = (elements) => {
  for (let i = elements.length - 1; i >= 0; i--) {
    console.log(elements[i]);
  }
};

reverse(letters);
