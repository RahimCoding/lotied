//functions//
const eqArrays = require("../eqArrays")
const assertArraysEqual = require("../assertArraysEqual")

//test code//


console.log("bug", (assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true))); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should FAIL