// word list
var wordList = ["AUSTIN", "BEYONCE", "DALLAS", "QUESO", "SELENA", "TACOS"];

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

    //clears giphy-embed
    document.getElementById("giphy-embed").src ="https://giphy.com/embed/szmc6VgQeft0A";
    
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
        } else {
            // if the letter is in the answer then replace the "_" with the letter
            for (var i = 0; i < wordAns.length; i++) {
                if (letter === wordAns[i]) {
                    wordAnsArr[i] = letter;
                }
            }
        }
    }
};



// function to check if the user has won
function isWinner() {
    // if there are no more  "_" in wordAnsArr then add +1 to wins and set isFinsihed to true
    if (wordAnsArr.indexOf("_") === -1) {
        numWins++;
        isFinished = true;
        // giff that will display if the user has guessed correctly
        if(wordAns === "AUSTIN") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/4NaJURoc3ULVgGSgTS";
        } else if (wordAns === "BEYONCE") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/idXJtVxvDDwWTDZoqd";
        } else if (wordAns === "DALLAS") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/2sizd1h6RrDQJdU5cJ";
        } else if (wordAns === "QUESO") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/l2QZZdG1skyLTXJcI";
        } else if (wordAns === "SELENA") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/hl0eJ9GsoiFVu";
        } else if (wordAns === "TACOS") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/3osxYrTYLiEYY0zntS";
        } 
    }
};

// fuction to check if the user has lost
function isLoser() {
    //if numGuessesRemaining is 0 then add +1 to losses and set is finished to true
    if(numGuessesRemaining <= 0) {
        numLosses++;
        isFinished = true;
        document.getElementById("giphy-embed").src = "https://giphy.com/embed/3o7WIAX4SN8MYO6kCc";
    }
};

// event listener for key pressed
document.onkeyup = function(event) {
    // if ifFinsihed is true then restart the game to the initial setup and set isFinsihed to false
    if (isFinished) {
        setup();
        isFinished = false;
    } else {
        // functions are only called if user presses letters A-Z
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

// way to check for answer
console.log(wordAns);