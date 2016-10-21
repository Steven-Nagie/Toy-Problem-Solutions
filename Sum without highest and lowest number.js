// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// (Only one element at each edge, even if there are more than one with the same value!)
//
// Example:
//
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
//
//
// If array is empty, null or None, or if only 1 Element exists, return 0.

function sumArray(array) {

  var sum = 0;

  if (!array || array.length < 2){
    return 0;
  } else {
    var sortArr = array.sort(function(a,b){return a - b;});
    for (var i = 1; i < sortArr.length - 1; i++) {
      sum += sortArr[i];
    }
  }
  return sum;
}
