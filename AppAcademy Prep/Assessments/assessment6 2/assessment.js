/******************************************************************************
Write a function myForEach(array, cb) that accepts an array and a callback. This
should behave just like Array#forEach. Passing the callback every element, its
corresponding index, and the array itself. It should return undefined.

Do NOT use the built-in Array#forEach method!

Example:
> myForEach([5,12,-3], function(ele, i, arr){
..  console.log(ele + " is at position " + i + " in array " + arr);
..})
5 is at position 0 in array [5,12,-3]
12 is at position 1 in array [5,12,-3]
-3 is at position 2 in array [5,12,-3]
undefined //return value
******************************************************************************/
function myForEach (arr, cb) {
  for(var i = 0; i < arr.length; i++){
    cb(arr[i], i, arr);//Feedback: u didnt pull out ar[i] HURRAY!
  }
}

/******************************************************************************
Write a function myMap(array, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. It should return a new array where each element in the new array is the
return value of the callback. Feel free to use the myForEach function you
wrote earlier or Array#forEach.

Do not use a for or while loop!

Examples:
> myMap([1, 2, 3], function(ele, i, arr){
..  return ele * i;
..})
[0, 2, 6] //return value

> myMap([1, 2, 3], function(ele, i, arr){
..  return ("This element is " + ele);
..})
["This element is 1", "This element is 2", "This element is 3"] //return value
******************************************************************************/
function myMap (arr, cb) {
  var selection = [];
//Feedback: Newline here
  myForEach(arr, function(ele, i, arr){
    selection.push(cb(ele,i,arr));
  })//Feedback: Missing semicolon
//Feedback: Newline here
  return selection;
}

/******************************************************************************
Write a function passingStudents(array) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Use only Array.prototype.forEach to iterate through any array!

Example:
> var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }];

> passingStudents(students)
[ 'Kush', 'Ned' ] //return value
******************************************************************************/
var passingStudents = function(array){
   var selection = [];

   for(var i = 0; i < array.length; i++){
     var student = array[i];

    if (findAverageGrade(student.grades) >= 70){
      selection.push(student.name);
    }
  }

return selection.join(" ");//Feedback: THIS! You don't need to join the array. that's why this is wrong
}

//Feedback: This looks correct
var findAverageGrade = function(grades){//Feedback: This is the right approach. You want to get the average using a hlper function
    var sum = 0;

    for(var i in grades){
      var grade = grades[i];//Feedback: Unnecessary
      sum += grade.score;
    }

    var averageGrade = sum/grades.length;
    return averageGrade;
}

/******************************************************************************
Write a function laligatSequence(base, n)

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

We can use the laligat sum to define a special sequence, called the laligat
sequence. The laligat sequence of a number begins with the number itself. The
second number in the sequence is the first number's laligat sum, the third
number is the second number's laligat sum, and so on.

For example, the first 4 numbers in the laligat sequence of 10 are: 10, 17, 58, 381.

The first argument is laligatSequence is the number that starts the sequence.
The second argument is the length of the sequence.

Examples:
> laligatSequence(10, 4)
[ 10, 17, 58, 381 ]

> laligatSequence(5, 2)
[ 5, 10 ]
*******************************************************************************/

var isPrime = function(num) {
    ////Feedback: if (num < 2){ return false; } // one liner
  if(num < 2){
    return false;
  }
    for (var i = 2; i < num; i++) {
        if(num % i === 0){
            return false;
        }
    return true;
}
}//Feedback: <-- YOU FORGOT THIS and the code didn't run

var collectPrimes = function(num){
  var sum = 0
//Feedback: Newline here
    for(var i = 0; i < num; i++){//Feedback: Should start i @ 2
    if(isPrime(i)){
      sum += i
    }
}
//Feedback: Newline here
return sum
}

var laligatSequence = function(base, n){
    var selection = []//Feedback: [base]. Then: if (n == 0){ return false; }
    var laligatSum = 0
    var i = 0
//Feedback: Newline here
    while(i < n){//Feedback: Because of post-decrement, you actually could have done: while(i++ < n)
      laligatSum += collectPrimes(base)
      i++//Feedback: And then skipped this
    }
//Feedback: Newline here
    return laligatSum
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  myMap : myMap,
  myForEach : myForEach,
  passingStudents: passingStudents,
  laligatSequence : laligatSequence
};
