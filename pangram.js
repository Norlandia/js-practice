'use strict';

let testString =
  'CSeBBZvYvDyayyBzdfdXvaBtxxwiXcD jQADzTCXzBxzwcyxbd cdyxcBbcxsVD wzXXzazCeqYyB CZzXyxAb WX zbtAdxRVyWEAB DbdAd ViYxzCSAuCVZVXyZY gfWzczBaAZWzXwy AXyXRvyrRZHxtedwcbAWeYiA ZwBea tQZaTXCoWbE cbtZvWZAziwA BWzBaVGbz yyECVAdAcSizBWgGTBz i BEJDELZ WBbaAEOGwbBcZZAvrYDmCWhT WycaXTatCwzavAwewZAZZWb ezBywzdYBhbZeVZBEZFuiPBafxyYzAdDxBb BcidxCV c oDZxgfbycygBdx y dCY ZEEZ txzasvxZADzcDzxhZzXBbDdaobzDYIwyAcXDdthWW U cjfzVWaCecAzaZzaAAUFXgcCYAZzD zABU CcaVZCZ Z xayFyXYAYyGavzVyZyzBe AxYzaACI hxXAaB UayBY y fCz ByXW AwxZzchzAwSwVBzuCW WaeddADAZycwa vZTjd czdWyzaybBeTCXYYZcBZtGy aSZrBAcZwcY BAcAeDFaA aXBhFwAyC IeW Y CaA AbWtSFbzVZIxTACZAaBYIBxbBAzCdAaWaWaAxAcvZaZZTzBBZZsug YtaYtmdxBzFDDzWWHhacAZDuzVyDBADAYaaxAqraXUzzJAAEAZSCWAbYZZyUfAyWYBKEZca bdbQazBEBXD XAdLwWHwwxFaFXxVZZyzcykCwcwaScqyDvB wAxdbDAZXFeEcwWbvbhFHxbYWAYab bZFzBIdax XvC ZcD DZxzabAcYavbdyFRBBbZWuu vzQAvZAVWAYSYbbCZfZWBXWeAZsXBcbaZfEbgEAIZvyCBwEydWa JByZedADvCZyftcUexYbYca BvZBCcybXbz zBUXdye zy YDaYEcAzdeaqEy ZDVSd dacbS szuzZSH ADycXCUDVb';

function isPangram(string) {
  let letterObject = {};
  string = string.replace(/\W/g, '').toLowerCase();

  for (let letter of string) {
    console.log(letter);
    
    if (letterObject[letter]) {
      letterObject[letter]++;
    } else {
      letterObject[letter] = 1;
    }
  }
  console.log(letterObject);
  
  return Object.keys(letterObject).length === 26 ? 'pangram' : 'not pangram';
}
console.log(isPangram(testString));
