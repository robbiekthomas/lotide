const flatten = function (array) {
  const answer = [];
  for (let ele of array) {
    if (Array.isArray(ele)) {
      answer.push(...ele);
    } else {
      answer.push(ele);
    }
  }
  return answer;
};

module.exports = flatten;
