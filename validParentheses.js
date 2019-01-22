/*
https://www.codewars.com/kata/valid-parentheses/train/csharp
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints
0 <= input.length <= 100
 */

// Split into array
// Move through array, if ( +1, if ) -1
// If it ever drops below zero, fail. If it ends at 0, pass

function validParentheses(parens){
  const arr = parens.split('');
  let count = 0;
  arr.forEach((par, i) => {
    if (par === ')') {
      count++;
    } else if (par === '(') {
      count--;
    } else {
      return false;
    }
    if (count < 0) {
      return false;
    }
  });

  return count === 0;
}