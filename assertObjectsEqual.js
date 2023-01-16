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

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      eqArrays(object1[key], object2[key]);
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(
        expected
      )}✅✅✅ `
    );
  } else {
    console.log(
      `🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(
        expected
      )}🛑🛑🛑`
    );
  }
};

module.exports = eqObjects;

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// const longSleeveShirtObject = {
//   size: "medium",
//   color: "red",
//   sleeveLength: "long",
// };

// assertObjectsEqual(shirtObject, anotherShirtObject);
// assertObjectsEqual(shirtObject, longSleeveShirtObject);

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
// };
// const longSleeveMultiColorShirtObject = {
//   size: "medium",
//   colors: ["red", "blue"],
//   sleeveLength: "long",
// };

// assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
// assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);
