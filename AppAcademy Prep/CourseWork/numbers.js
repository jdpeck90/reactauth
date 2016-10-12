// Write a function isOdd(num) which takes as the argument num a number.
// It returns a boolean, true if num is odd, and false otherwise.
// Examples:
// isOdd(2) => false
// isOdd(5) => true
// isOdd(-17) => true

function isOdd(num) {
  var result = num % 2 !== 0;
  return result;
}

// Write a function plusFive(num) which takes as the argument num a number.
// It returns the sum of num and 5.
// Examples:
// plusFive(0) => 5
// plusFive(-2) => 3
// plusFive(21) => 26

function plusFive(num) {
  var result = num + 5;
  return result;
}

// Write a function threeOrSeven(num) which takes as the argument num a number.
// It returns a boolean, true if the number is divisible by 3 or 7, and false otherwise.
// Examples:
// threeOrSeven(3) => true
// threeOrSeven(35) => true
// threeOrSeven(10) => false
// threeOrSeven(21) => true

function threeOrSeven(num) {
  if((num % 3 ===0) || (num % 7 ===0)) {
    return true;
  } else {return false}
}

// Order of Operations: Evaluate each expression.

1 + 1 * 5; === 6

(1 + 1) * 5; === 10

1 + 2 - 5 / 6 - 1; === 2.8333333333333335

5 * 5 % 13; === 12

5 / (-1 * (5 - (-10))); === -0.333333
