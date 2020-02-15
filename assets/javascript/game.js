// word list
var wordList = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY"];

// maximum number of guesses
var maxGuesses = 10;
// array to store letters that have been guessed
var lettersGuessed = [];
// store the empty letter placeholder
var wordAnsArr = [];
// number of guesses remaining
var numGuessesRemaining = 0;
// number of wins
var numWins = 0;
// number of losses
var numLosses = 0;
// then true, game can start again
var isFinished = false;
// the word that is being played
var wordAns;


// function runs at start of the page
// function also used to restart after game is finished
function setup() {

    //pick random word from wordList
    wordAns = wordList[Math.floor(Math.random() * wordList.length)];
    wordAnsArr = [];

    // adds "_" to wordAnswerArr
    for (var i = 0; i < wordAns.length; i++) {
        wordAnsArr[i] = "_";
    };

    // reset variables
    numGuessesRemaining = maxGuesses;
    lettersGuessed = [];

    // show selected elements on the screen
    updateScreen ();
};

// function to update screen
function updateScreen() {
    document.getElementById("numWins").innerText = numWins;
    document.getElementById("numLosses").innerText = numLosses;
    document.getElementById("numGuessesRemaining").innerText = numGuessesRemaining;
    document.getElementById("wordAns").innerText = wordAnsArr.join("");
    document.getElementById("lettersGuessed").innerText = lettersGuessed;
};

// function to check what key is pressed
function checkGuess(letter) {
    // if letter is not in lettersGuessed array then push the letter to the array
    if (lettersGuessed.indexOf(letter) === -1) {
        lettersGuessed.push(letter);
        // subtract numGuessesRemaining if letter not in answer  
        if (wordAns.indexOf(letter) === -1) {
            numGuessesRemaining--;
            // if numGuessesRemaining is 3 or less then change color
            if (numGuessesRemaining <=3) {
                document.getElementById("numGuesses").style.color = "#CD5C52"    
            }
        } else {
            for (var i = 0; i < wordAns.length; i++) {
                if (letter === wordAns[i]) {
                    wordAnsArr[i] = letter;
                }
            }
        }
    }
};


function isWinner() {
    if (wordAnsArr.indexOf("_") === -1) {
        numWins++;
        isFinished = true;
    }
};

function isLoser() {
    if(numGuessesRemaining <= 0) {
        numLosses++;
        isFinished = true;
    }
};

document.onkeyup = function(event) {
    if (isFinished) {
        setup();
        isFinished = false;
    } else {
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            checkGuess(event.key.toUpperCase());
            updateScreen();
            isWinner();
            isLoser();
        }
    }
};

setup();
updateScreen();

console.log(ansWord);