/*
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/


function expandedForm(num) {
  var newNum = [];
  var numArr = num.toString().split('');
  numArr.forEach((number, i) => {
    if (number != 0) {
      var exNum = [number];
      for (let j = 0; j < numArr.length - (i + 1); j++) {
        exNum.push('0');
      }
      exNum = exNum.join('');
      newNum.push(exNum);
    }
  });

  var finalArr = [];
  newNum.forEach((number, i) => {
    if (i < newNum.length - 1) {
      finalArr.push(number += ' + ');
    } else {
      finalArr.push(number);
    }
  });

  var answer = finalArr.join('');

  return answer;
}
