// Write a function hello(str) which takes as the argument str a string.
// It returns a string saying "Hello" to str.
// Examples:
// hello("Ned") => "Hello, Ned."
// hello("Anthony") => "Hello, Anthony."
// hello("Daniel") => "Hello, Daniel."
console.log("---- hello ----")
function hello(str) {
  var result = "Hello, " + str + "."
  return result;
}
console.log(hello("Ned"))
console.log(hello("Anthony"))
console.log(hello("Daniel"))

// Write a function yell(str) which takes as the argument str a string.
// It returns a string, a 'yelling' version of str.
// Examples:
// yell("Hello world!") => "HELLO WORLD!"
// yell("time to program") => "TIME TO PROGRAM"

console.log("----- yell -----")
function yell(str) {
  var result = str.toUpperCase();
  return result
}
console.log(yell("time to program"))
console.log(yell("Hello world!"))
// yell("time to program") => "TIME TO PROGRAM"
// Write a function whisper(str) which takes as the argument str a string.
// It returns a string, a 'whispered' version of str.
// Examples:
// whisper("Hey Anthony") => "...hey anthony..."
// whisper("YEA! that was fun") => "...yea! that was fun..."

console.log("----- whisper ----")
function whisper(str) {
  var result = str.toLowerCase()
  return "..." + result + "..."
}
console.log(whisper("Hey Anthony"))
console.log(whisper("YEA! that was fun"))

// Write a function echo(str) which takes as the argument str a string.
// It returns a string, an 'echoed' version of str.
// Examples:
// echo("Mom!") => "MOM! ... Mom! ... mom!"
// echo("hey") => "HEY ... hey ... hey"
console.log("--- echo ----")
function echo(str) {
var lowerCase = str.toLowerCase()
var upperCase = str.toUpperCase()

return upperCase + "..." + str + "..." + lowerCase}

console.log(echo("Mom!"))
console.log(echo("hey"))

// Write a function isSubstring(searchString, subString) which takes the arguments
// searchString and subString strings. It returns a boolean, true if the subString
// is found in the searchString, and false otherwise.
// Examples:
// isSubstring("The cat went to the store", "he cat went") => true
// isSubstring("Time to program", "time") => true
// isSubstring("Jump for joy", "joys") => false

console.log("--- isSubstring ----")
function isSubstring(searchString, subString) {
  var lowerCaseSearch = searchString.toLowerCase()
  var lowerCaseSub = subString.toLowerCase()
  var result = lowerCaseSearch.indexOf(lowerCaseSub) !== -1
  return result
}

console.log(isSubstring("The cat went to the store", "he cat went"))
console.log(isSubstring("Time to program", "time"))
console.log(isSubstring("Jump for joy", "joys"))
