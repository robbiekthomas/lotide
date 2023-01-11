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

console.log(assertEqual(result['l'], 1));
console.log(assertEqual(result['i'], 2));
console.log(assertEqual(result['g'], 1));
console.log(assertEqual(result['h'], 4));
console.log(assertEqual(result['t'], 2));
console.log(assertEqual(result['o'], 2));
console.log(assertEqual(result['u'], 2));
console.log(assertEqual(result['s'], 2));
console.log(assertEqual(result['e'], 3));
console.log(assertEqual(result['n'], 1));