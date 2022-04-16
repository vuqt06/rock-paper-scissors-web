function computerPlay() {
    let computerMove = Math.floor(Math.random() * 3) + 1;
    if (computerMove == 1) return "Rock"
    else if (computerMove == 2) return "Paper"
    else return "Scissors";
}

function playRock(scores, computerSelection) {
    if (computerSelection == 'Paper') {
        scores[1]++;
        return "You lose! Paper beats Rock!"
    }
    else if (computerSelection == 'Scissors') {
        scores[0]++;
        return "You win! Rock beats Scissors!"
    }
    else {
        return "Draw!";
    }
}

function playPaper(scores, computerSelection) {
    if (computerSelection == 'Scissors') {
        scores[1]++;
        return "You lose! Scissors beats Paper!"
    }
    else if (computerSelection == 'Rock') {
        scores[0]++;
        return "You win! Paper beats Rock!"
    }
    else {
        return "Draw!";
    }
}

function playScissors(scores, computerSelection) {
    if (computerSelection == 'Rock') {
        scores[1]++;
        return "You lose! Rock beats Scissors!"
    }
    else if (computerSelection == 'Paper') {
        scores[0]++;
        return "You win! Scissors beats Paper!"
    }
    else {
        return "Draw!";
    }
}

function checkWinner(scores, winnerSound, loserSound) {
    if (scores[0] == 5) {
        winnerSound.play();
        if (confirm("Congratulations! You are the winner!")) {
            window.location.reload();
        }
        else {
            window.location.reload();
        }
    } else if (scores[1] == 5) {
        loserSound.play();
        if (confirm("Defeated! Don't give up!")) {
            window.location.reload();
        }
        else {
            window.location.reload();
        }
    }
}

let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorsBtn = document.querySelector('.scissors');
let roundMsg = document.querySelector('.round-status');
let playerScoreText = document.querySelector('.player-score');
let computerScoreText = document.querySelector('.computer-score');
const clickSound = document.querySelector(`audio[data-key="76"]`);
const winnerSound = document.querySelector(`audio[data-key="77"]`);
const loserSound = document.querySelector(`audio[data-key="78"]`);
let delayTime = 2000;

let scores = [0, 0];

rockBtn.addEventListener('click', () => {
    clickSound.play();
    let computerSelection = computerPlay();
    roundMsg.textContent = roundMsg.textContent = playRock(scores, computerSelection);
    playerScoreText.textContent = scores[0];
    computerScoreText.textContent = scores[1];
    let roudResult = document.createElement('li');
    roudResult.textContent = `Rock - ${computerSelection}`;
    let detailResultList = document.querySelector('.detail-results');
    detailResultList.appendChild(roudResult);
    setTimeout(checkWinner(scores, winnerSound, loserSound), delayTime);

});

paperBtn.addEventListener('click', () => {
    clickSound.play();
    let computerSelection = computerPlay();
    roundMsg.textContent = roundMsg.textContent = playPaper(scores, computerSelection);
    playerScoreText.textContent = scores[0];
    computerScoreText.textContent = scores[1];
    let roudResult = document.createElement('li');
    roudResult.textContent = `Paper - ${computerSelection}`;
    let detailResultList = document.querySelector('.detail-results');
    detailResultList.appendChild(roudResult);
    setTimeout(checkWinner(scores, winnerSound, loserSound), delayTime);
});

scissorsBtn.addEventListener('click', () => {
    clickSound.play();
    let computerSelection = computerPlay();
    roundMsg.textContent = roundMsg.textContent = playScissors(scores, computerSelection);
    playerScoreText.textContent = scores[0];
    computerScoreText.textContent = scores[1];
    let roudResult = document.createElement('li');
    roudResult.textContent = `Scissors - ${computerSelection}`;
    let detailResultList = document.querySelector('.detail-results');
    detailResultList.appendChild(roudResult);
    setTimeout(checkWinner(scores, winnerSound, loserSound), delayTime);
});