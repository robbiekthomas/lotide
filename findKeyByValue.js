const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}✅✅✅ `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}🛑🛑🛑`);
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const findKeyByValue = function (object, value) {
  const entries = Object.entries(object);
  for (let entry of entries) {
    if (entry[1] === value) {
      return entry[0];
    }
  }
};

module.exports = findKeyByValue;

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
