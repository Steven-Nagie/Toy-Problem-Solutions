// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
//
// Your task is to return:
//
// true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
// false otherwise.
// For example, given the following input array:
//
// var list1 = [
//   { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//   { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//   { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
// ];
// your function should return true as there is at least one developer from the required 5 geographic zones.
//
// Notes:
//
// The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.
//
//
//
//
// This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.

function allContinents(list) {
  var cont = [], continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  for (var i = 0; i < list.length; i++) {
    cont.push(list[i].continent);
  }

  return continents.every(function(elem) {
    return cont.indexOf(elem) != -1;
  });
}

function allContinents(list) {
  var cont = [], continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  list.forEach(elem => cont.push(elem.continent));

  return continents.every(elem => cont.indexOf(elem) != -1);
}
