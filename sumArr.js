function sumArray(array) {
  if (array === null || array === undefined || array.length < 2){
    return 0;
  }
  const minIndex = array.indexOf(Math.min(...array))  
    if (minIndex > -1) {
      array.splice(minIndex, 1);
    }
  const maxIndex = array.indexOf(Math.max(...array))
    if (maxIndex > -1) {
      array.splice(maxIndex, 1);
    } 
  return array.reduce((a,b)=> a+b,0)
}

console.log(sumArray(null)) //> 0
console.log(sumArray([ ])) //> 0
console.log(sumArray([ 3 ])) //> 0
console.log(sumArray([ 3, 5 ]) ) //> 0
console.log(sumArray([ 6, 2, 1, 8, 10 ]) ) //> 16
console.log(sumArray([ 0, 1, 6, 10, 10 ])) //> 17
console.log(sumArray([ -6, -20, -1, -10, -12 ])) //> -28
console.log(sumArray([ -6, 20, -1, 10, -12 ])) //> 3
console.log(sumArray([ 1, 1, 11, 2, 3 ])) //> 6