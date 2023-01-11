const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}✅✅✅ `);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}🛑🛑🛑`);
  }
};

const countLetters = function(letters) {
  const answer = {};
  for (let letter of letters) {
    const charCode = letter.charCodeAt(0);
    if ((charCode >= 65 && charCode < 91) || (charCode >= 97 && charCode < 123)) {
      answer[letter] ? answer[letter] += 1: answer[letter] = 1;
    }
  }
  return answer;
}

const result = countLetters("lighthouse in the house");

assertEqual(result['l'], 1);
assertEqual(result['i'], 2);
assertEqual(result['g'], 1);
assertEqual(result['h'], 4);
assertEqual(result['t'], 2);
assertEqual(result['o'], 2);
assertEqual(result['u'], 2);
assertEqual(result['s'], 2);
assertEqual(result['e'], 3);
assertEqual(result['n'], 1);