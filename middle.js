// 
// const assertArraysEqual = require("../assertArraysEqual")




const middle = function(array){
let result = []
if(array.length < 3) {
  return []
} 
if(array.length % 2 === 1){
let index = (array.length - 1)/2
result.push(array[index])
} else {
  let index2 = ((array.length / 2))
  let index1 = index2 - 1
  result.push(array[index1])
  result.push(array[index2])
}
return result
}


module.exports = middle

console.log(middle([1])) // => []
middle([1, 2]) // => []