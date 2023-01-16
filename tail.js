const tail = function (array) {
  const answer = [];
  if (array.length <= 1) {
    return [];
  }
  for (let i = 1; i < array.length; i++) {
    answer.push(array[i]);
  }
  return answer;
};

module.exports = tail;
