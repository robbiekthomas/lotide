const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`πππAssertion Failed: ${actual} !== ${expected}πππ`);
    return;
  }
  console.log(`βββ Assertion Passed: ${actual} === ${expected}βββ `);
};

module.exports = assertEqual;
