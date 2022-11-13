const options = ["rock", "paper", "scissors"];

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * options.length);
    return computerChoice;
}

function playRound (playerSelection, computerSelection) {
    let playerSelection = prompt("Choose: Rock, paper or scissors?");
    let computerSelection = getComputerChoice();

    if (playerSelection === "rock") {
        if (computerSelection === "rock"){
            console.log("Computer selected rock, it's a tie!");
        } else if (computerSelection === "papper"){
            console.log("Computer selected papper, you loose!");
        } else (computerSelection === "scissors"){
            console.log("Computer selected scissors, you won!");
        }
    }

    if (playerSelection === "papper") {
        if (computerSelection === "rock"){
            console.log("Computer selected rock, you won!");
        } else if (computerSelection === "papper"){
            console.log("Computer selected papper, it's a tie!");
        } else (computerSelection === "scissors"){
            console.log("Computer selected scissors, you loose!");
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock"){
            console.log("Computer selected rock, you loose!");
        } else if (computerSelection === "papper"){
            console.log("Computer selected papper, you won!");
        } else (computerSelection === "scissors"){
            console.log("Computer selected scissors, it's a tie!");
        }
    }

}