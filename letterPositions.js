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

const letterPositions = function (letters) {
  const answer = {};
  const lettersArray = letters.split("");
  for (let [index, letter] of lettersArray.entries()) {
    let charCode = letter.charCodeAt(0);
    if (
      (charCode >= 65 && charCode < 91) ||
      (charCode >= 97 && charCode < 123)
    ) {
      answer[letter] ? answer[letter].push(index) : (answer[letter] = [index]);
    }
  }
  return answer;
};

module.exports = letterPositions;

const result = letterPositions("lighthouse in the house");

assertArraysEqual(result.l, [0]);
assertArraysEqual(result.i, [1, 11]);
assertArraysEqual(result.g, [2]);
assertArraysEqual(result.h, [3, 5, 15, 18]);
assertArraysEqual(result.t, [4, 14]);
assertArraysEqual(result.o, [6, 19]);
assertArraysEqual(result.u, [7, 20]);
assertArraysEqual(result.s, [8, 21]);
assertArraysEqual(result.e, [9, 16, 22]);
assertArraysEqual(result.n, [12]);
