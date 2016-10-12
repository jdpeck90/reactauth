/**********************************************************
Write a function factorial(n) that returns the factorial
of the number n. For example, the factorial of 5 is
5 * 4 * 3 * 2 * 1 = 120.

Examples:
> factorial(1);
1

> factorial(4);
24

> factorial(5);
120

> factorial(10);
3628800
**********************************************************/

function factorial(n) {
var num = n;
while(n>1){
  num*= (n-1)
  n--
}
return num
}

console.log("---should be 1---")
console.log(factorial(1))

console.log("---should be 24---")
console.log(factorial(4))

console.log("---should be 120---")
console.log(factorial(5))

console.log("---should be 3628800---")
console.log(factorial(10))
