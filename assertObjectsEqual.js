const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1)
  const object2Keys = Object.keys(object2)
  if (object2Keys.length !== object1Keys.length) {
    return false
  }
  for (let key of object2Keys) {
    if (object1[key] !== object2[key]) {
      return false
    }
  }
  return true
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected){
  if (actual === expected) {
    console.log("ITS TRUE")
  } else {
    console.log("ITS FALSE")
  }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true


const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false