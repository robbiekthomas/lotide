const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word.length);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
