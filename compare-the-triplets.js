'use strict';

let alice = [5, 6, 7];
let bob = [3, 6, 10];

function compareTriplets(list1, list2) {
  let aresult = 0;
  let bresult = 0;
  let result = [];

  for (let i = 0; i < list1.length; i++) {
    if (list1[i] < list2[i]) {
      bresult++;
    } else if (list1[i] > list2[i]) {
      aresult++;
    }
  }
  result.push(aresult, bresult);
  return result;
}
console.log(compareTriplets(alice, bob));
