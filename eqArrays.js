// FUNCTION IMPLEMENTATION
function eqArrays(value1, value2){
  if(value1.toString() === value2.toString()) {
    console.log(value1)
    return true 
  } else {
    console.log(value1)
    return false
  }
}



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} === ${[expected]}`);
  }
};

// TEST CODE
assertEqual(eqArrays([2, 2, 5], [1, 2, 3]), true); // => should PASS