const findKeyByValue = function (object, value) {
  const entries = Object.entries(object);
  for (let entry of entries) {
    if (entry[1] === value) {
      return entry[0];
    }
  }
};

module.exports = findKeyByValue;
