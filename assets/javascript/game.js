// word list
var wordList = ["january", "february", "march", "april", "may"];

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

// number of nosses
var numLosses = 0;

// then true, game can start again
var isFinished = false;

// the word that is being played
var wordAns;



// function runs at the start of the page
// function also used to restart after game is finished
function setup() {

    //picks random word from wordList
    wordAns = wordList[Math.floor(math.random() * wordAns.length)];

    wordAnsArr = [];


    // adds "_" to wordAnswerArr
    for (var i = 0; i < wordAns.length; i++) {
        wordAns[i = "_"];
    }

    // reset the variables
    numGuessesRemaining = maxGuesses;
    lettersGuessed = [];

    // code for photos to be displayed with correct answer

    // show the selected elements on the screen
    updateScreen ();
}

// updates the HTML from the functions
function updateScreen() {
    document.getElementById("numWins").innerText = numwins;
    document.getElementById("numLosses").innerText = numLosses;
    document.getElementById("numGuessesRemaining").innerText = numGuessesRemaining;
    document.getElementById("wordAns").innerText = wordAnsArr.join("");
    document.getElementById("lettersGuessed").innerText = lettersGuessed;
}