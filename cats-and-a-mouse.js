'use strict'

let catAPosition = 1;
let catBPosition = 3;
let mousePosition = 2;

const catAndMouse = (catA, catB, mouse) => {
  if (Math.abs(mouse - catA) > Math.abs(mouse - catB)) {
    return 'Cat B';
  } else if (Math.abs(mouse - catA) < Math.abs(mouse - catB)) {
    return 'Cat A'
  } else {
    return 'Mouse C'
  }
}
console.log(catAndMouse(catAPosition, catBPosition, mousePosition));

