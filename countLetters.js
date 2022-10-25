const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${[actual]} === ${[expected]}`);
  }
};

const countLetters = function(allItems){
  let results = {}
  for (let item of allItems) {
    // console.log(item);
    if (item !== " "){
      if(results[item]){
        results[item] += 1
      } else {
        results[item] = 1
      }
    }
  }
  return results
}

module.exports = countLetters