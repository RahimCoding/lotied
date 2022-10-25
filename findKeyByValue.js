const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} === ${[expected]}`);
  }
};

const findKeyByValue = function(object, value){
  //creates array
  for (let key of Object.keys(object)){
    //checks the object if its same as value
    if(object[key] === value){
      // returns value of key
      return key;
    }
  }
  //else return undefined
  return undefined;

}

module.exports = findKeyByValue

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
