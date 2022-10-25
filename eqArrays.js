// FUNCTION IMPLEMENTATION
function eqArrays(value1, value2) {
  if(value1.length !== value2.length){
    return false
  }
  for (let i = 0; i < value1.length; i++) {
    if (value1[i] !== value2[i]) {
      return false
    }
  }
  return true
}

module.exports = eqArrays;

const assertEqual = require('./assertEqual'); 