// Array of words
var wordBank = ["harrypotter", "usher", "baylor", "houstontexans", "aquariums", "whiskey", "dogs"];
var Word = function(picture, song, preview){};
// Randomly selecting word

var computerWord = wordBank [Math.floor(Math.random() * wordBank.length)];
//var blanks = []; 
//var correctWord= [];
//var guessedLetters = [];
//var newGuessedLetters = []
//var wins = 0;
//var losses = 0;
console.log(computerWord);
lettersOfWord: [],
this.lettersOfWord = computerWord.split("");

console.log(this.lettersOfWord);





var  Letter = function(wordString, underscore) {
//function display a letter or _ for each letter
this.lettersused = [];





//constructor should define a string value to store the underlying character for the letter


//constructor should define a boolean value that stores whether that letter has been guessed yet

//constructor should define a function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed


//constructor should define a function tha takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly


}

