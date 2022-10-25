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

// function without(originalArray, itemsToRemoveFromArray) {
//   let newArray = []
//   let toAdd = false
//   for (i = 0; i < originalArray.length; i++) {
//     for (j = 0; j < itemsToRemoveFromArray.length; j++) {
//       if (itemsToRemoveFromArray[j] !== originalArray[i]) {
//         toAdd = true
//       } else {
//         toAdd = false
//       }
//     }
//     if (toAdd) {
//       newArray.push(originalArray[i])
//     }
//   }
//   console.log(newArray)
//   return newArray
// }



function without(originalArray, itemsToRemoveFromArray) {
  let newArray = []
  for (i = 0; i < originalArray.length; i++) {
    if (!itemsToRemoveFromArray.includes(originalArray[i])) {
      newArray.push(originalArray[i])
    }
  } console.log(newArray)
}

module.exports = without


without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

