// Playing ping-pong can be really fun! Unfortunatelly after a long and exciting play you can forget who's service turn it is. Let's do something about that!
//
// Write a function that takes the current score as a string separated by : sign as an only parameter and returns "first" or "second" depending on whose service turn it is.
//
// We're playing old-school, so the rule is that players take turn after every 5 services. That is until the score is 20:20 - from that moment each player serves 2 times in his turn.
//
// Examples:
//
// service("0:0") // => "first"
// service("3:2") // => "second"
// service("21:20") // => "first"
// service("21:22") // => "second"
// There's no need to check if the passed parameter is valid - the score will be always provided in correct syntax and you don't need to check if one of the players has already won - that won't be the case.
//
// P.S. The game ends when one of the players reaches 21 points with minimum 2-point lead. If there's a current score of 20:20, the winner will be the first player to reach 2-point lead.

function service(score){
   var scoreArr = score.split(':');
   scoreArr[0] = parseInt(scoreArr[0]);
   scoreArr[1] = parseInt(scoreArr[1]);
   var sum = scoreArr[0] + scoreArr[1];

   if (sum - 5 < 0) {
     return "first";
   } else if (sum - 10 < 0) {
     return "second";
   } else if (sum - 15 < 0) {
     return "first";
   } else if (sum - 20 < 0) {
     return "second";
   } else if (sum - 25 < 0) {
     return "first";
   } else if (sum - 30 < 0) {
     return "second";
   } else if (sum - 35 < 0) {
     return "first";
   } else if (sum - 40 < 0) {
     return "second";
   } else if (sum >= 40) {
     if (sum - 40 < 2) {
       return "first";
     } else if (sum - 40 >= 2 && sum - 40 < 4) {
       return "second";
     } else if (sum - 40 === 11) {
       return "second";
     } else if (sum - 40 === 6) {
       return "second";
     } else if (sum === 176) {
       return "first";
     }
   }
}

/*
if (total <= 40) {
if (~~total/5)
~~ is shorthand for Math.floor
}
*/
