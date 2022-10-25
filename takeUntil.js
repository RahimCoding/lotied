const takeUntil = function (array, callback) {
  let newArray = []
  // loop through the array
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) { // evaluates the item and searching for anything thats not the same
      newArray.push(array[i])
    } else {
      return newArray //stops the function once it matches the condition 
    }
  } 
}

module.exports = takeUntil

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);