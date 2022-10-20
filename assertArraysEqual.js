function eqArrays(value1, value2) {
  if(value1.length !== value2.length){
    return false
  }
  for (let i = 0; i < value1.length; i++) {
    if (value1[i] !== value2[i]) {
      return false
    }
  }
  console.log("check everything:")
  return true
}

const assertArraysEqual = function(actual, expected){
  if (eqArrays(actual, expected)) {
    console.log("ITS TRUE")
  } else {
    console.log("ITS FALSE")
  }
}


assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 3, 3], [1, 2, 4]), false); // => should FAIL