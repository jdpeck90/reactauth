/**********************************************************
Write a function longWordCount(string, n) that takes in a
string and returns the number of words longer than n
characters.

Examples:
> longWordCount("", 3);
0

> longWordCount("short words only", 6);
0

> longWordCount("one reallylong word", 9);
1

> longWordCount("two reallylong words inthisstring", 9);
2

> longWordCount("seventy schfifty five", 7);
1
**********************************************************/

function longWordCount(string, n) {

  var counter = 0;
  var splitStr = string.split(" ")

  for(var i = 0; i<splitStr.length; i++){
    var eachStr = splitStr[i];
    console.log(eachStr)

    if(eachStr.length>n){
      counter++
    }
  }
  return counter
}

console.log("Test: 1 ===== 0")
console.log(longWordCount("", 3) === 0)

console.log("Test: 2 ===== 0")
console.log(longWordCount("short words only", 6) === 0)

console.log("Test: 3 ===== 1")
console.log(longWordCount("one reallylong word", 9) === 1)

console.log("Test: 4 ===== 2")
console.log(longWordCount("two reallylong words inthisstring", 9) === 2)

console.log("Test: 5===== 1")
console.log(longWordCount("seventy schfifty five", 7) === 1)
