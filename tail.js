const assertEqual = require('./assertEqual'); 

const tail = function(list) {
  let result = list.slice(1)

  return result
};

// [1,2,3] [2] [3]
// [1,2,3,4,5] [4] [5]


module.exports = tail;

