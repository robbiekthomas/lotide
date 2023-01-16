const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}✅✅✅ `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}🛑🛑🛑`);
  }
};

const without = function (sourceArray, itemsToRemove) {
  let filtered = sourceArray;
  for (let item of itemsToRemove) {
    filtered = filtered.filter((ele) => ele !== item);
  }
  return filtered;
};

module.exports = without;

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3, 4, 5, 6, 7], [1, 4, 7]), [2, 3, 5, 6]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
