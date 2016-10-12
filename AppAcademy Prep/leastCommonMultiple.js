/**********************************************************
Write a function leastCommonMultiple(num1, num2) that
returns the smallest number which is a multiple of both
inputs.

Examples:
> leastCommonMultiple(2, 3);
6

> leastCommonMultiple(6, 10);
30

> leastCommonMultiple(24, 26);
312
**********************************************************/

function leastCommonMultiple(num1, num2) {
var number = 1
var counter = 1;
while(number % num2 !== 0){
  number = num1 * counter
  counter++
}
return number
}

console.log("Test: 1 ==== 6")
console.log(leastCommonMultiple(2, 3) === 6)

console.log("Test: 2 ==== 30")
console.log(leastCommonMultiple(6, 10) === 30)

console.log("Test: 3 ==== 312")
console.log(leastCommonMultiple(24, 26) === 312)
