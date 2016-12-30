/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes: - the returned string should only contain lowercase letters
*/

function kebabize(str) {
  str = str.split('').map((letter) => {
    if (!isNaN(parseInt(letter))) {
      return "";
    }else if (letter === letter.toUpperCase()) {
      return "-" + letter.toLowerCase();
    } else {
      return letter;
    }
  }).join('');

  if (str.charAt(0) === "-") {
    str = str.slice(1);
  }

  return str;
}
