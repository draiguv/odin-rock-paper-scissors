let playerSelection;
let playerStanding = 0;
let computerStanding = 0;

function getSelectedValue(selected) {
    return selected == 1 ? 'rock'
        : selected == 2 ? 'paper'
        : 'scissors'
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1
}

function validatePlayerChoice(choice) {
    if (choice == 'rock' || choice == 'paper' || choice == 'scissors') return true
    
    alert('Invalid choice! Choose again.')
    playerSelection = prompt('Rock? Paper? Scissors? Choose your PokéHand! Good luck!');

    if (playerSelection == null) {
        if (confirm('You cancelled, do you surrender?')) return
        playerSelection = prompt('Rock? Paper? Scissors? Choose your PokéHand! Good luck!');
    }
    
    validatePlayerChoice(playerSelection.toLowerCase());
}

function playRound(playerSelection, computerSelection) {
    // DRAW SECTION
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        console.log('Draw!');
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        console.log('Draw!');
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        console.log('Draw!');
    }
    
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('You Lose! Rock is helpless to Paper!');
        computerStanding += 1;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('You Win! Rock breaks Scissors!');
        playerStanding += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('You Win! Paper have magic to defeat Rock!');
        playerStanding += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log('You Lose! Scissors cuts Paper!');
        computerStanding += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('You Lose! Scissors can\'t cut Rock idiot!');
        computerStanding += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('You Win! Scissors is super effective against Paper!');
        playerStanding += 1;
    }
}

function game() {
    let initialTotalRound = 5;

    for (let index = 0; index < initialTotalRound; index++) {
        let computerSelection = getSelectedValue(getComputerChoice());
        playerSelection = prompt('Rock? Paper? Scissors? Choose your PokéHand! Good luck!');

        if (playerSelection == null) {
            if (confirm('You cancelled, do you surrender?')) return
            playerSelection = prompt('Rock? Paper? Scissors? Choose your PokéHand! Good luck!');
        }
        
        validatePlayerChoice(playerSelection.toLowerCase());
        playRound(playerSelection, computerSelection);

        if (index >= initialTotalRound - 1 && playerStanding < 5 && computerStanding < 5) game();
        if (playerStanding == 5 || computerStanding == 5) break;
    }
}

game();
if (playerSelection != null) console.log(playerStanding == 5 ? 'Congratulation! You beaten the computer' : 'You Lose, loser! LOL XD');