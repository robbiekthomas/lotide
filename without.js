const without = function (sourceArray, itemsToRemove) {
  let filtered = sourceArray;
  for (let item of itemsToRemove) {
    filtered = filtered.filter((ele) => ele !== item);
  }
  return filtered;
};

module.exports = without;
