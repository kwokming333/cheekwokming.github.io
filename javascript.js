//read in a number
var toGuess = 6;

var userinput = prompt("Type a number 1-10");
//convert string to number
var usersGuess = parseInt(userinput);

if (toGuess == usersGuess) {
        console.info('you read my memory');
} else if (toGuess > usersGuess) {
        console.warn('your guess is lower than my number');

} else {
        console.warn('your guess is lower');
}








