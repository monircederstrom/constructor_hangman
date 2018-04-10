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




