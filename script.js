const player1Total = document.getElementById("player1Score");
const player2Total = document.getElementById("player2Score");
const diceRoll = document.getElementById("diceRollScore");
const clickNewGame = document.getElementById("newGame");
const rollTheDice = document.getElementById("rollDice");
const holdPlayerScore = document.getElementById("hold");
const winner = document.getElementById("whoWins");

let whichPlayer = "player1";
let rollScore1 = 0;
let rollScore2 = 0;
const diceFaces = 6;


//roll the dice
rollTheDice.addEventListener("click", () => {
    holdPlayerScore.style.display = "";


    let rdmNumber = Math.floor((Math.random() * diceFaces) + 1);
    diceRoll.textContent = rdmNumber;
//player1
    if (whichPlayer == "player1") {
        if (rdmNumber > 1) {
            rollScore1 = rollScore1 + rdmNumber;
            player1Total.textContent = rollScore1;
            if (rollScore1 > 20) {
                rollTheDice.style.display = "none";
                holdPlayerScore.style.display = "none";
                winner.textContent = "The Winner is Player 1! Congratulations!";
            }
        }
        if (rdmNumber == 1) {
            holdPlayerScore.style.display = "none";
            rollScore1 = 0;
            player1Total.textContent = rollScore1;
            rdmNumber = 0;
            whichPlayer = "player2";
            winner.textContent = "Player 1: You rolled a 1, Your score has been reset! Player 2, it is your turn!"
        }
    }
//player2    
    if (whichPlayer == "player2") {
        if (rdmNumber > 1) {
            rollScore2 = rollScore2 + rdmNumber;
            player2Total.textContent = rollScore2;
            if (rollScore2 > 20) {
                rollTheDice.style.display = "none";
                holdPlayerScore.style.display = "none";
                winner.textContent = "The Winner is Player 2! Congratulations!";
            }
        }
        if (rdmNumber == 1) {
            holdPlayerScore.style.display = "none";
            rollScore2 = 0;
            player2Total.textContent = 0;
            rdmNumber = 0;
            whichPlayer = "player1";
            winner.textContent = "Player 2: You rolled a 1, Your score has been reset! Player 1, it is your turn!"
        }
    }
})

//switches from player 1 to player 2.
holdPlayerScore.addEventListener("click", () => {
    if (whichPlayer == "player1") {
        whichPlayer = "player2";
        winner.textContent = "Player 1 has hold! Player 2, its your turn!"
    }
    else {
        whichPlayer = "player1";
        winner.textContent = "Player 2 has hold! Player 1, its your turn!"
    }
})

//newgame button
clickNewGame.addEventListener("click", () => {
    whichPlayer = "player1";
    holdPlayerScore.style.display = "";
    rollTheDice.style.display = "";
    winner.textContent = "Let's Play! Player 1, you start!";
    rollScore1 = 0;
    rollScore2 = 0;
    player1Total.textContent = rollScore1;
    player2Total.textContent = rollScore2;
    diceRoll.textContent = "";
})
