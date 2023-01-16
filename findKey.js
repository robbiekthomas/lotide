const findKey = (object, callback) => {
  const entries = Object.entries(object);
  for (let entry of entries) {
    if (callback(entry[1])) {
      return entry[0];
    }
  }
};

module.exports = findKey;
