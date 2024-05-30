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
