/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.
Courtesy of ProjectEuler.net
*/

// I'm sure there's a long way and a short way to do this. I'd like to do it the short way.
// Long way I see is to create an array of every number below number, get rid of any that aren't multiples of three or five using modulus, then reduce them all.
// Gotta be a faster way than that.
// Make sure not to include number itself in the array, since the instructions are asking for everything BELOW number.
function solution(number){

  var arr = [];

  for (var i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }

  var final = 0;
  if (arr[0]) {
    final = arr.reduce((a, b) => a + b)
  }

  return final;

}
