var bar = 5;
console.log("1: " + bar); //1: What will bar be on this line? //
console.log("----^^^^^5^^^^^-----")

function foo() {
  var bar = 10;
  console.log("3: " + bar); //3: What will bar be on this line?
console.log("----^^^^^10^^^^^-----")
  var innerFoo = function() {
    bar = 15;
  }

  console.log("4: " + bar); //4: What will bar be on this line?
  console.log("----^^^^^10^^^^^-----")
}

console.log("2: " + bar); //2: What will bar be on this line
console.log("----^^^^^5^^^^^-----")
foo();
console.log("5: " + bar); //5: What will bar be on this line?
console.log("----^^^^^10^^^^^-----")
