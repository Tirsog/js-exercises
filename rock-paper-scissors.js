let computerWins = 0;
let playerWins = 0;
let draws = 0;
let computerSelection = "";
let playerSelection = "";


//Defino arriba variables vacias (y globales) ¿Es correcto?

function computerPlay() {

    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "scissors";
            break;
    }
}

function playerPlay() {
    let playerSelectionInput = window.prompt("Player, choose:", "Rock, paper or scissors")
    playerSelection = playerSelectionInput.toLowerCase();
}

function playRound() {
    playerPlay();
    computerPlay();
    if (playerSelection === computerSelection) {
        draws++;
        console.log("Empate")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWins++;
        console.log("Computer wins paper beats rock.")
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerWins++;
        console.log("Computer wins scissors beats paper.")
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWins++;
        console.log("Computer wins rock beats scissors.")
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWins++;
        console.log("Player wins rock beats scissors.")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWins++;
        console.log("Player wins paper beats rock.")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWins++;
        console.log("Player wins scissors beats rock.")
    }
}

function game() {
    for (let i = 0; i < 1; i++) {
        playRound();
    }
    console.log("Computer:" + computerWins)
    console.log("Player:" + playerWins)
    console.log("Draws:" + draws)
}