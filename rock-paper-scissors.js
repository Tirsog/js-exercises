let computerWins = 0;
let playerWins = 0;
let draws = 0;

// Jugada del ordenador.

function computerPlay() {

    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }

}

// Escoge el jugador.

function playerPlay() {
    let playerSelectionInput = window.prompt("Player, choose:", "Rock, paper or scissors")
    return playerSelectionInput.toLowerCase();
}

function playRound() {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
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
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log("Computer:" + computerWins)
    console.log("Player:" + playerWins)
    console.log("Draws:" + draws)
}