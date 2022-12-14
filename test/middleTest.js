// functions //

const middle = require("../middle")
const assert = require('chai').assert;

// test code//



describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]),[]);
  });
  it("returns [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]),[])
  });  
  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]),[2])
  })
});

// middle([1]) // => []
// middle([1, 2]) // => []

// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]

// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
