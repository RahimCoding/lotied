const middle = function(array){
let result = []
if(array.length < 1) {
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

console.log(middle([1,2,3,4,5,6]))