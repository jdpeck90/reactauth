var cookieMonster = {
  name: "Fred",
  hair: "blue",
  favoriteFoods: ["cookies"],
  goodFoods: ["pizza", "skittles"],
  badFoods: ["water", "banana"],
  hatedFoods: ["spinach"],
  eat: function(foods){
    var score =0;
    for( var i =0; i<foods.length; i++){
    var food = foods[i];
    if(cookieMonster.favoriteFoods.indexOf(food) !== -1){
      score+=2
  }
  if(cookieMonster.goodFoods.indexOf(food) !== -1){
    score+=1
}
if(cookieMonster.badFoods.indexOf(food) !== -1){
  score-=1
}
if(cookieMonster.hatedFoods.indexOf(food) !== -1){
  score-=2
}
}return score;
},
  isAlrightMeal: function(foods){
    var score = this.eat(foods)
    return(score>=-1 && score<=1)
  }
}

/********/
module.exports = cookieMonster; // Don't touch this line
