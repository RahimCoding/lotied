const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

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


const results1 = map(words, word => word[0]);
console.log(results1);

const expectedResult = [ 'g', 'c', 't', 'm', 't' ] // should pass
const expectedResult2 = [ 'g', '3', 't', 't' ] //should fail
const expectedResult3 = [ 'g', 'c', '4', 'm', 't' ] //should fail

assertArraysEqual(results1, expectedResult)
assertArraysEqual(results1, expectedResult2)
assertArraysEqual(results1, expectedResult3)