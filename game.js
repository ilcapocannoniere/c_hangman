// word selection is random
//Random word is selected and exported
var wordsToGuess = ['divestiture','deviance','overhaul','admonitory','protracted','curmudgeon','reciprocity'];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;

/*
divestiture: taking off getting rid of giving up
deviance: being different in moral standards (from normal)
overhaul: examine thoroughly to learn about the condition
admonitory: containing warning
protracted: prolonged
curmudgeon: bad-tempered person
reciprocity: granting of privileges in return for similar
*/
