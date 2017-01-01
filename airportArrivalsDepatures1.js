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


// COULD ALSO DO A FOREACH INSTEAD OF A FOR LOOP
var flapDisplay = function(lines, rotors) {

  for (let i = 0; i < lines.length; i++) {
    var totalMove = 0;
    lines[i] = lines[i].split('').map((letter, index) => {
      totalMove += rotors[i][index];
      var newLetter = (totalMove + ALPHABET.indexOf(letter)) % ALPHABET.length;
      return(ALPHABET.charAt(newLetter));
    }).join('');
  }

  return lines;
}
