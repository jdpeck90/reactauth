var arr = [1,2,3,4,5,6,7,8,9,10];

function randomValidIndex(arr){
  var result = Math.random()* arr.length
  console.log(result)
}


for(var i = 0; i < 1000; i += 1) {
  var idx = randomValidIndex(arr);

  if(idx < 0 || idx >= arr.length) {
    console.log("NOT WORKING. Found an out of bounds index:", idx);
  } else { return "good shit"}
}


randomValidIndex([1,2,3,4,5,6,7,8,9,10])

console.log("----------------oddsUpEvensDown----------------")

function oddsUpEvensDown(array){
  var selection = [];
  for (var i = 0; i < array.length; i++){
    var element = array[i];

    if (i % 2 === 0){

      selection.push(Math.floor(element))
    } else {
      selection.push(Math.ceil(element))
      }
    }

    return selection;
}
var arr = [2.1, 3.01, 3.7, -1.2];
console.log(oddsUpEvensDown(arr));
console.log("-------Should equal:[2, 4, 3, -1]------")

console.log("----------------randomNumberGenerator----------------")

function randomNumberGenerator(min, range){
  var result = Math.round(Math.random()*range + min)
  return result
}

console.log(randomNumberGenerator(1, 10))
