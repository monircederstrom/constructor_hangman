//console.log("letter is working");

//constructor should define a string value to store the underlying character f
//or the letter

var  Letter = function(char) {
//function display a letter or _ for each letter
		this.char = char;
		//constructor should define a boolean value that stores whether that letter has been guessed yet
		this.guessed = false;
		//constructor should define a function tha takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
		if (this.char == ' ')
		this.guessed = true;
}
		//constructor should define a function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
		Letter.prototype.printInfo = function() {
			if (this.guessed) {
				return this.char;
			}
			return "_ ";
	}
module.exports = Letter;

