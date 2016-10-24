//Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

//pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

function pigIt(str){
  var arr = str.split(' ');

  for (var i = 0; i < arr.length; i++) {
    var x = arr[i].slice(0, 1);
    arr[i] = arr[i].slice(1);
    arr[i] = arr[i].concat(x) + 'ay';
  }
  return arr.join(' ');
}
