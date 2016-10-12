


var cookieMonster = {
name: "Fred",
hair: "blue",
favoriteFoods: ["cookies"],
goodFoods: ["pizza", "skittles"],
badFoods: ["water", "banana"],
hatedFoods: ["spinach"],
eat: function(foods){
var score = 0;
for(var i =0; i<foods.length; i++){
  var food = foods[i];
  if (cookieMonster.favoriteFoods.indexOf(food) !== -1){
    score += 2;
  } else if (cookieMonster.goodFoods.indexOf(food) !== -1){
    score += 1;
  }else if(cookieMonster.badFoods.indexOf(food) !== -1){
    score -= 1;
  }else if(cookieMonster.hatedFoods.indexOf(food) !== -1){
    score -= 2;
  }
}
return score;
},
isAlrightMeal: function(foods){
  var score = cookieMonster.eat(foods)
if (score >= -1 && score <= 1){
  return true;
}
return false
}
};

/********/
module.exports = cookieMonster; // Don't touch this line
