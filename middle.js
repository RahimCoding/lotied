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
console.log(result)
return result
}

middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]