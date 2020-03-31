var myMoviesCharacters = ["Gregory Peck", "Sophia Lauren", "Raquel Welch", "Charles Bronson", "Anthony Quinn"];
var citiesWeHaveVisited = ["HonoLulu", "Kona", "Hilo", 12, 38, 346000];
var concatenated = myMoviesCharacters.concat(citiesWeHaveVisited);
concatenated.pop();
concatenated.push("half a million");
console.log(concatenated);
var number = concatenated[8];
concatenated.reverse();
concatenated[4] = "Roger Moore";


var carNames = ["Nisan", "Toyota", "mazda", "lexus", "Honda"];
carNames.forEach(function(car){
alert("i like " + car + " very much");
});

var myTotal =0;
var someNumbers = [5, 14, 38, 72];
someNumbers.forEach(function(myNum){
myTotal += myNum;
console.log(myTotal);
});

var inputThings = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
inputThings.forEach(function(ourVariables){
  var userInput = $("input#" + ourVariables).val();
  $("." + ourVariables).text(unerInput);
 });
 
 
var myMoviesCharacters = ["Gregory Peck", "Sophia Lauren", "Raquel Welch", "Charles Bronson", "Anthony Quinn"];
var myNewCharacters = [];
myMoviesCharacters.forEach(function(myCharacter){
myNewCharacters.push(myCharacter);
});


alert(myMoviesCharacters);
myMoviesCharacters;
console.log(myMoviesCharacters);

var myNumberArray = [2, 4, 5];
var tripledNumbers = [];
myNumberArray.forEach(function(myNumber){
tripledNumbers.push(myNumber * 3);
});

var myNumberArray = [2, 4, 5];
var trippledNumbers = myNumberArray.map(function(myNumber){
return myNumber * 3;
});
