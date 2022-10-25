// FUNCTIONS //


const assert = require('chai').assert;
const tail = require('../tail');
const words = ["tim","allen", "tom"];

// TEST CODE //

describe("#tail", () => {
  it("returns [6,7] for [5,6,7]", () => {
    assert.deepEqual(tail([5,6,7]),[6,7]);
  });
  it("returns ['allen', 'tom'] for ['tim', 'allen', 'tom']", () => {
    assert.deepEqual(tail(words), ['allen', 'tom'])
  })
});



// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
