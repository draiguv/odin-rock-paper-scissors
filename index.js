let playerSelection;
let playerStanding = 0;
let computerStanding = 0;

function getSelectedValue(selected) {
    return selected == 1 ? 'rock'
        : selected == 2 ? 'paper'
        : 'scissors';
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function validatePlayerChoice(choice) {
    if (choice == 'rock' || choice == 'paper' || choice == 'scissors') return true;
    
    alert('Invalid choice! Choose again.');
    playerSelection = prompt('Rock? Paper? Scissors? Choose your PokéHand! Good luck!');

    if (playerSelection == null) {
        if (confirm('You cancelled, do you surrender?')) return;
        playerSelection = prompt('Rock? Paper? Scissors? Choose your PokéHand! Good luck!');
    }
    
    validatePlayerChoice(playerSelection.toLowerCase());
}

function playRound(playerSelection, computerSelection) {
    let log;
    
    playerSelection = playerSelection.target.innerText.toLowerCase();
    computerSelection = getSelectedValue(getComputerChoice());

    // DRAW SECTION
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        log = 'Draw!';
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        log = 'Draw!';
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        log = 'Draw!';
    }
    
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        log = 'You Lose! Rock is helpless to Paper!';
        computerStanding += 1;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        log = 'You Win! Rock breaks Scissors!';
        playerStanding += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        log = 'You Win! Paper have magic to defeat Rock!';
        playerStanding += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        log = 'You Lose! Scissors cuts Paper!';
        computerStanding += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        log = 'You Lose! Scissors can\'t cut Rock idiot!';
        computerStanding += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        log = 'You Win! Scissors is super effective against Paper!';
        playerStanding += 1;
    }

    const div = document.querySelector('.result');
    const player = document.createElement('p');
    const computer = document.createElement('p');
    const logs = document.createElement('p');

    const playerClass = document.querySelector('.player');
    const computerClass = document.querySelector('.computer');
    const logsClass = document.querySelector('.logs');

    if (playerClass != null) div.removeChild(playerClass);
    if (computerClass != null) div.removeChild(computerClass);
    if (logsClass != null) div.removeChild(logsClass);

    logs.textContent = log;
    div.appendChild(logs);

    player.textContent = `You: ${playerStanding}`;
    computer.textContent = `Computer: ${computerStanding}`;

    div.appendChild(player);
    div.appendChild(computer);

    logs.classList.add('logs');
    player.classList.add('player');
    computer.classList.add('computer');

    if (playerStanding == 5 || computerStanding == 5) {
        const finalResult = document.createElement('h2');
        const finalResultClass = document.querySelector('.finalResult');

        if (finalResultClass != null) div.removeChild(finalResultClass);

        finalResult.textContent = playerStanding == 5 ? 'Congratulation! You beaten the computer' : 'You Lose, loser! LOL XD';
        finalResult.classList.add('finalResult');
    
        div.appendChild(finalResult);

        setTimeout(() => {
            resetGame();
        }, 2000);
    }
}

function game() {
    let initialTotalRound = 5;

    for (let index = 0; index < initialTotalRound; index++) {
        let computerSelection = getSelectedValue(getComputerChoice());
        playerSelection = prompt('Rock? Paper? Scissors? Choose your PokéHand! Good luck!');

        if (playerSelection == null) {
            if (confirm('You cancelled, do you surrender?')) return;
            playerSelection = prompt('Rock? Paper? Scissors? Choose your PokéHand! Good luck!');
        }
        
        validatePlayerChoice(playerSelection.toLowerCase());
        playRound(playerSelection, computerSelection);

        if (index >= initialTotalRound - 1 && playerStanding < 5 && computerStanding < 5) game();
        if (playerStanding == 5 || computerStanding == 5) break;
    }
}

// game();
// if (playerSelection != null) console.log(playerStanding == 5 ? 'Congratulation! You beaten the computer' : 'You Lose, loser! LOL XD', ` - Standing: You = ${playerStanding} | Computer = ${computerStanding}`);

function resetGame() {
    const div = document.querySelector('.result');
    const player = document.querySelector('.player');
    const computer = document.querySelector('.computer');
    const logs = document.querySelector('.logs');
    const finalResult = document.querySelector('.finalResult');

    div.removeChild(player);
    div.removeChild(computer);
    div.removeChild(logs);
    div.removeChild(finalResult);

    playerStanding = 0;
    computerStanding = 0;
}

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', playRound);
});