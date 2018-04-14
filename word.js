var letterLink = require("./letter.js");
//constructor named word
var Word = function(char) {
    this.char = char;
// array of new letter objects
    this.lettersArray = [];
    this.lettersGuessed = "";
    for(var i = 0; i < this.char.length; i++) {
        this.lettersArray.push(new letterLink.Letter(this.char[i]));
    }
};
//function that...
    Word.prototype.isComplete = function () {
        for(var i = 0; i < this.lettersArray.length; i++) {
            if(!this.lettersArray[i].show) return false;
        }
        return true;
    };
    Word.prototype.letterIndex = function(letterInput){
        var upperChar = letterLink.toUpperCase();
        if(this.lettersGuessed.indexOf(upperChar) != 1) {
            return "Already Guessed";
        }
    this.lettersGuessed += upperChar;
    for(var i = 0; i < this.lettersArray.length; i++){
        if(this.lettersArray[i].char.toUpperCase() == upperChar) {
            this.lettersArray[i].show = true;
        };
    };

};
    Word.prototype.toString = function(){
        var output = "";
        for(var i=0; i<this.lettersArray.length; i++){
      output += this.lettersArray[i].printInfo();
    };
    return output;
  };
module.exports = Word;