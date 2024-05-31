function getComputerChoice() {
    const choices =['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

console.log(getComputerChoice());

function getHumanChoice() {
    const validChoices = ['rock', 'paper','scissors'];
    let userInput = prompt("Please enter your choice(rock, paper or scissors)").toLowerCase();

    while (!validChoices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return userInput;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    let result;
    if (humanChoice === computerChoice) {
        return `It's a tie! both chose ${userChoice}.`;
    }
    else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
    ){
        result = `You win! ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${computerChoice}.`;
        humanScore++;
    } else {
        result = `Computer wins! ${computerChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${humanChoice}.`;
        computerScore++;
    } 
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  
