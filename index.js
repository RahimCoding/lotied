// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require("./eqArrays")
const assertArraysEqual = require("./assertArraysEqual")
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual')
const without = require('./without')
const countLetters = require('./countLetters')
const countOnly = require('./countOnly')
const eqObjects = require("./eqObjects")
const findKey = require("./findKey")
const findKeyByValue = require('./findKeyByValue')
const letterPositions = require('./letterPositions')
const map = require('./map')
const takeUntil = require('./takeUntil')

module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  without,
  countLetters,
  countOnly,
  eqObjects,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil
};

