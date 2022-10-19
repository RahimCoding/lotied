function eqArrays(value1, value2) {
  for (let i = 0; i < value1.length; i++) {
    if (value1[i] !== value2[i]) {
      return false
    }
  }
  console.log("check everything:")
  return true
}

function assertArraysEqual(array1, array2){
  let value1 = array1
  let value2 = array2
  eqArrays(value1, value2)
  if (eqArrays(value1, value2) === true) {
    console.log("ITS TRUE")
  } else {
    console.log("ITS FALSE")
  }
}


assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 3, 3], [1, 2, 4]); // => should FAIL