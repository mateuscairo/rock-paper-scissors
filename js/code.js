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
        } else if(computerSelection === "scissors"){
            console.log("Computer selected scissors, you won!");
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock"){
            console.log("Computer selected rock, you won!");
        } else if (computerSelection === "paper"){
            console.log("Computer selected papper, it's a tie!");
        } else if (computerSelection === "scissors"){
            console.log("Computer selected scissors, you loose!");
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock"){
            console.log("Computer selected rock, you loose!");
        } else if (computerSelection === "paper"){
            console.log("Computer selected paper, you won!");
        } else if (computerSelection === "scissors"){
            console.log("Computer selected scissors, it's a tie!");
        }
    }

}

let param1 , param2 = undefined;

for (let i = 0; i < 5; i++) {
    playRound(param1,param2);
}