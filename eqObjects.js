const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} === ${[expected]}`);
  }
};

function eqArrays(value1, value2) {
  if (value1.length !== value2.length) {
    return false
  }
  for (let i = 0; i < value1.length; i++) {
    if (value1[i] !== value2[i]) {
      return false
    }
  }
  return true
}

const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1)
  const object2Keys = Object.keys(object2)
  if (object2Keys.length !== object1Keys.length) {
    return false
  }
  for (let key of object2Keys) {
    const value1 = object1[key]
    const value2 = object2[key]
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false
      }
    } else if (value1 !== value2) {
      return false
    }
  }
  return true
};

module.exports = eqObjects

