/*************************************************************
Write a function logEach(array) that prints every element
of the array and its index to the console.

Examples:
> logEach(["Anthony", "John", "Carson"]);
0: Anthony
1: John
2: Carson
*************************************************************/
console.log("----LogEach----")
function logEach(array) {
for(var i=0; i<array.length; i++){
  var element = array[i]
console.log(i + ":" + element )



}}

// test cases:
console.log(logEach(["Anthony", "John", "Carson"]))
/*************************************************************
Write a function maxValue(ary) that returns the largest
value in the ary. ary is an array of numbers.

Examples:
> maxValue([12, 6, 43, 2])
43

> maxValue([])
null

> maxValue([-4, -10, 0.43])
0.43
*************************************************************/
console.log("----maxValue----")
function maxValue(array) {
  var max = null;

  for(var i = 0; i<array.length; i++){
    var number = array[i];
    if (number> max){
      max = number;
    }
  }
  return max;
}

console.log(maxValue([12, 6, 43, 2]))
console.log(maxValue([-4, -10, 0.43]))

// test cases:

/*************************************************************
Write a function printRange(start, end) that prints all
the numbers from start to end. If a range doesn't exist
(start > end), then print "Bad Range" instead.

Examples:
> printRange(22, 24)
22
23
24

> printRange(5, 1)
Bad Range
*************************************************************/
console.log("----printRange----")
function printRange(start, end) {
  if(start>end){
    console.log("Bad Range")
  }
  for(var i = start; i<=end; i++){
    console.log(i)}
  }

// test cases:
console.log(printRange(22, 24))

console.log(printRange(2, 24))
console.log("---Bad Range--")
console.log(printRange(22, 2))
