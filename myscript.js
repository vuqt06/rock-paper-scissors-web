function computerPlay() {
    let computerMove = Math.floor(Math.random() * 3) + 1;
    if (computerMove == 1) return "Rock"
    else if (computerMove == 2) return "Paper"
    else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    let printPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper"
        || playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors"
        || playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") return 'You Lose!' + computerSelection + ' beats ' + printPlayerSelection
    else if (computerSelection == "Rock" && playerSelection.toLowerCase() == "paper"
        || computerSelection == "Paper" && playerSelection.toLowerCase() == "scissors"
        || computerSelection == "Scissors" && playerSelection.toLowerCase() == "rock") return 'You Win! ' + printPlayerSelection + ' beats ' + computerSelection
    else if (computerSelection == "Paper" && playerSelection.toLowerCase() == "paper"
        || computerSelection == "Scissors" && playerSelection.toLowerCase() == "scissors"
        || computerSelection == "Rock" && playerSelection.toLowerCase() == "rock") return "Draw!";
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose your move?");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
        if (result.charAt(4) == 'W') playerScore++
        else if (result.charAt(4) == 'L') computerScore++;
    }

    if (playerScore > computerScore) return "You Win The Game!"
    else if (playerScore < computerScore) return "You lose The Game!"
    else return "Draw! That Was Tight!";
}

let rockBtn = document.querySelector('.rock')
