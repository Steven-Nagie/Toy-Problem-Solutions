/*
You notice that each flap character is on some kind of a rotor and the order of characters on each rotor is:

ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+/*0123456789

And after a long while you deduce that the display works like this:

Starting from the left, all rotors (from the current one to the end of the line) flap together until the left-most rotor character is correct.
Then the mechanism advances by 1 rotor to the right...
...REPEAT this rotor procedure until the whole line is updated
...REPEAT this line procedure from top to bottom until the whole display is updated
Example

Consider a flap display with 3 rotors and one 1 line which currently spells CAT

Step 1 (current rotor is 1)
Flap x 1
Now line says DBU
Step 2 (current rotor is 2)
Flap x 13
Now line says DO)
Step 3 (current rotor is 3)
Flap x 27
Now now line says DOG
This can be represented as

lines = ["CAT"]
rotors = [[1,13,27]]
result = ["DOG"]
Kata Task

Given the initial display lines and the rotor moves for each line, determine what the board will say after it has been fully updated.

For your convenience the characters of each rotor are in the pre-loaded constant ALPHABET which is a string.
*/

var flapDisplay = function(lines, rotors) {
  console.log(ALPHABET);
  var arr = lines[0].split('');
  var totalMove = 0;

  function reduceLength(x) {
    return x % ALPHABET.length;
  }

  arr = arr.map((letter, i) => {
    totalMove += rotors[0][i];
    if (totalMove + ALPHABET.indexOf(letter) > ALPHABET.length) {
      var newLetter = reduceLength(totalMove + ALPHABET.indexOf(letter));
      return(ALPHABET.charAt(newLetter));
    } else {
      return(ALPHABET.charAt(ALPHABET.indexOf(letter) + totalMove));
    }
  });
  lines[0] = arr.join('');
  return lines;
}

//REFACTORED
var flapDisplay = function(lines, rotors) {
  console.log(ALPHABET);
  var arr = lines[0].split('');
  var totalMove = 0;

  arr = arr.map((letter, i) => {
    totalMove += rotors[0][i];
    var newLetter = (totalMove + ALPHABET.indexOf(letter)) % ALPHABET.length;
    return(ALPHABET.charAt(newLetter));
  });
  lines[0] = arr.join('');
  return lines;
}
