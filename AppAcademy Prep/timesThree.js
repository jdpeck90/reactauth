/*
** Write a function timesThree that takes a number as its input.
** The function should return the product of the input number and three. Be sure
** to test your function with our exmaples.
**
** Examples
** timesThree(1) => 3
** timesThree(5) => 15
** timesThree(20) => 60
** timesThree(-1) => -3
*/

function timesThree (number) {
  var result = number * 3;
  return result;
}

// uncomment the lines below to test your function. each statement should print true
console.log(timesThree(1) === 3);
console.log(timesThree(5) === 15);
console.log(timesThree(20) === 60);
console.log(timesThree(-1) === -3);
