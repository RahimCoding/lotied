const eqArrays = require("./eqArrays")


const assertArraysEqual = function(actual, expected){
  
  if (actual === expected) {
    console.log("ITS TRUE")
    return true
  } else {
    console.log("ITS FALSE")
    return false
  }

}

module.exports = assertArraysEqual