function sayHelloFirstName(firstName){
  var greeting = "Hello";

  function sayHelloFirstNameLastName(lastName){

    return greeting + " " + firstName + " " + lastName;
  }

  return sayHelloFirstNameLastName;

}

var helloTony = sayHelloFirstName("Tony");

var helloTonyStark = helloTony("Stark");

console.log(helloTonyStark);
