// Welcome. In this kata, you are asked to square every digit of a number.
//
// For example, if we run 9119 through the function, 811181 will come out.
//
// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  num = num.toString();
  var arr = num.split('');
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }
  num = arr.join('');
  num = parseInt(num);
  return num;

}
