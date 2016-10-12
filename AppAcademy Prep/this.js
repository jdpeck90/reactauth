var myObj = {
  name: "Markov",
  sayHi: function() {
      console.log(this.name + " says hi!");
      }
}

 var myFunc = myObj.sayHi;

 myObj.sayHi()
