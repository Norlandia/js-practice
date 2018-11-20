'use strict';

let camelString = 'saveChangesInTheEditor';

function camelcase(camelWord) {
  return camelWord.split(/(?=[A-Z])/g).length;
}

console.log(camelcase(camelString));

