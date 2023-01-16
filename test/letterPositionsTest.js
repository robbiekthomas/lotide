const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPositions");

const result = letterPositions("lighthouse in the house");

assertArraysEqual(result.l, [0]);
assertArraysEqual(result.i, [1, 11]);
assertArraysEqual(result.g, [2]);
assertArraysEqual(result.h, [3, 5, 15, 18]);
assertArraysEqual(result.t, [4, 14]);
assertArraysEqual(result.o, [6, 19]);
assertArraysEqual(result.u, [7, 20]);
assertArraysEqual(result.s, [8, 21]);
assertArraysEqual(result.e, [9, 16, 22]);
assertArraysEqual(result.n, [12]);
