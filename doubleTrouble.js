// Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.
//
// Example:
//
// x = [1, 2, 3, 4, 5]
// t = 3
//
// 1+2 = t, so remove 2. No other pairs = t, so rest of array remains:
//
// [1, 3, 4, 5]
//
// Work through the array from left to right.
//
// Return the resulting array.

function trouble(x, t){
  var q = 0;

  for (var i = 0; i < x.length; i++) {
    if (x[i] + x[i + 1] === t) {
      x.splice(i + 1, 1);
      q++;
    }
   }

  if (q > 0) {
    trouble(x, t);
  }
  return x;
}

// Can also do the following to make it more straight forward and not use recursion.
function trouble(x, t){


  for (var i = 0; i < x.length; i++) {
    if (x[i] + x[i + 1] === t) {
      x.splice(i + 1, 1);
      i--;
    }
   }

  return x;
}
