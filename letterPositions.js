const letterPositions = function (sentence) {
  const results = {};
  for (i = 0; i < sentence.length; i++) {
    let letter = sentence.charAt(i)
    if (letter !== " ") {
      if (results[letter]) {
        //hitting a letter that has been used before!
        results[letter].push(i)
      } else {
        // first time hitting net new letters (creates the key as we go)
        results[letter] = [i]
      }
    }
  }
  console.log(results)

  // logic to update results here
  return results;
};

function eqArrays(value1, value2) {
  if (value1.length === value2.length) {
    for (let i = 0; i < value1.length; i++) {
      if (value1[i] !== value2[i]) {
        return false
      }
    }
    return true
  }
  return false
}

function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("ITS TRUE")
  } else {
    console.log("ITS FALSE")
  }
}




assertArraysEqual(letterPositions("hello").e, [1]);