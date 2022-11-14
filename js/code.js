const options = ["rock", "paper", "scissors"];

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * options.length);
    return options[computerChoice];
}

function getPlayerChoice (){
    let playerChoice = prompt("Choose: Rock, paper or scissors?");
    return playerChoice;
} 

function playRound (playerSelection, computerSelection) {

    playerSelection = getPlayerChoice().toLowerCase();
    computerSelection = getComputerChoice();

    if (playerSelection === "rock") {
        if (computerSelection === "rock"){
            console.log("Computer selected rock, it's a tie!");
        } else if (computerSelection === "paper"){
            console.log("Computer selected papper, you loose!");
            scoreComputer++;
        } else if(computerSelection === "scissors"){
            console.log("Computer selected scissors, you won!");
            scorePlayer++;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock"){
            console.log("Computer selected rock, you won!");
            scorePlayer++;
        } else if (computerSelection === "paper"){
            console.log("Computer selected papper, it's a tie!");
        } else if (computerSelection === "scissors"){
            console.log("Computer selected scissors, you loose!");
            scoreComputer++;
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock"){
            console.log("Computer selected rock, you loose!");
            scoreComputer++;
        } else if (computerSelection === "paper"){
            console.log("Computer selected paper, you won!");
            scorePlayer++;
        } else if (computerSelection === "scissors"){
            console.log("Computer selected scissors, it's a tie!");
        }
    }

}

let param1 , param2 = undefined;

let scorePlayer = 0
, scoreComputer = 0;

for (let i = 0; i < 5; i++) {
    playRound(param1,param2);
    console.log(`Score:\nPlayer:${scorePlayer}\nComputer:${scoreComputer}`);
}

if (scoreComputer > scorePlayer) {
    console.log("YOU LOOSE")
}
else if (scoreComputer < scorePlayer){
    console.log("YOU WIN")
}
else {
    console.log("IT'S A TIE")
}