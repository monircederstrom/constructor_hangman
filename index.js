var inquirer = require("inquirer");
var word = require("./word.js");
// Array of words
var wordBank = ["harrypotter", "usher", "baylor", "houstontexans", "aquariums", "whiskey", "dogs"];
var Word = function(picture, song, preview){};
var inputChar;



// Randomly selecting word

var computerWord = wordBank [Math.floor(Math.random() * wordBank.length)];

console.log(computerWord);
lettersOfWord: [],

this.lettersOfWord = computerWord.split("");

var guessesNum = 10;
function hangman() {
    console.log(computerWord);
       
    inquirer.prompt([
        {
          type: "text",
          name: "letter",
          message: "Guess a letter"
        }
    ]).then(function(user) {
        var char = user.letter;
        computerWord.letterIndex(char);
        if(computerWord.isComplete()){
            console.log("You Win!");
            return;
        }
       hangman();
    });
    
}

hangman();