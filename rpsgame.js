function getComputerChoice() {
    const choices =['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

console.log(getComputerChoice());

function getHumanChoice() {
    const validChoices = ['rock', 'paper','scissors'];
    let userInput = prompt("Please enter your choice: rock, paper or scissors").toLowerCase();

    while (!validChoices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return userInput;
}


function playGame() {


let humanScore = 0;
let computerScore = 0;


function playRound() {

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    
    let result;
    if (humanChoice === computerChoice) {
        result = `It's a tie! both chose ${humanChoice}.`;
    } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
    ){
        result = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
        humanScore++;
    } else {
        result = `Computer wins! ${computerChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${humanChoice}.`;
        computerScore++;
    } 

    console.log(result);
    console.log(`Scores: Player ${humanScore} - Computer ${computerScore}`);

  }

  
for (let i = 0; i < 5; i++) {
    playRound();
}

if (humanScore > computerScore) {
    console.log("Congratulations, you won the game!");
} else if (computerScore > humanScore) {
    console.log("Unlucky, the computer has beaten you..");
} else {
    console.log("It's a tie.");
 }
}

playGame();
