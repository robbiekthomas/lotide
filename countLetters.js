const countLetters = function (letters) {
  const answer = {};
  for (let letter of letters) {
    const charCode = letter.charCodeAt(0);
    if (
      (charCode >= 65 && charCode < 91) ||
      (charCode >= 97 && charCode < 123)
    ) {
      answer[letter] ? (answer[letter] += 1) : (answer[letter] = 1);
    }
  }
  return answer;
};

module.exports = countLetters;
