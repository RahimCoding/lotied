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
  head: head,
  tail: tail,
  middle: middle,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  without: without,
  countLetters: countLetters,
  countOnly: countOnly,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil
};

