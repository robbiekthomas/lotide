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
