const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}✅✅✅ `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}🛑🛑🛑`);
  }
};

const tail = function(array) {
  const answer = [];
  if (array.length <= 1) {
    return [];
  }
  for (let i = 1; i < array.length; i++) {
    answer.push(array[i]);
  }
  return answer;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const singleCase = tail(['hello']);
assertEqual(singleCase.length, 0);

const emptyArray = tail([]);
assertEqual(emptyArray.length, 0);

