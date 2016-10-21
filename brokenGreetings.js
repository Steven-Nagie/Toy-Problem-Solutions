// Correct this code so that the greet function returns the expected value.

//Problem:

function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + name;
};

//Solution
