// This file contain js code that is practiced 
// +++++++++++++++++++++++++ Practice For "for" loop ++++++++++++++++++++++++
var total =0;
for (var i=0; i< 30; i+=5){
  total += i;
}
alert (total);

var total =0;
for (var i=0; i< 30; i+=7){
  total += i;
}
alert (total);

// BTW total for above was a smaller number for i +=7;

var anArray = [1, 4, 7, 9, 11];
var anotherArray =[];
for (var i=0; i < anArray.length; i+=1){
  anotherArray.push(anArray[i] * 2);
}
anotherArray;

var anArray = [1, 4, 7, "what is it", 11];
var anotherArray =[];
for (var i=0; i < anArray.length; i+=1){
  if (parseInt(anArray[i])){
  anotherArray.push(anArray[i] * 2);
  } else {
    anotherArray.push("not a number");
  }
}
anotherArray;

var aString ="Believe you can and you're halfway there. Theodore Roosevelt";
var withoutVowels;
for (var i=0; i <aString.length; i+=1){
  if (aString[i] === ("e" || "o" || "i")){
    //aString[i] = "-";
    alert("yes");}
  else {
    //aString[i] = aString[i];
    alert("no");}
}

var aString = "Believe you can and you're halfway there. Theodore Roosevelt";
var aStringArray = aString.split('');
for (var i=0; i <aStringArray.length; i+=1){
  if (aStringArray[i] === "e" || aStringArray[i] ==="o" || aStringArray[i] ==="i"){
    aStringArray[i] = "-";
    }
  else {
    aStringArray[i] = aStringArray[i];
  }
}
var final = aStringArray.join(' ');




// +++++++++++++++++ Practice for forEach and Arrays +++++++++++++++++++++++++++++++++++++



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
