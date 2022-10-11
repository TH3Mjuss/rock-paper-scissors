function getComputerChoice() { // Make the computer choose randomly between rock, paper or scissors 
    const choice = ["rock", "paper", "scissors"];
    const cpuChoice = Math.floor(Math.random() * 3);

    return choice[cpuChoice]
}


function playRound(playerSelection, cpuSelection) { // check who wins between computer or player

    if (playerSelection.toLowerCase() == "rock" && cpuSelection.toLowerCase() == "scissors") {
        console.log("WIN !");
        return "win"
    }
    else if (playerSelection.toLowerCase() == "paper" && cpuSelection.toLowerCase() == "rock") {
        console.log("WIN !");
        return "win"
    }
    else if (playerSelection.toLowerCase() == "scissors" && cpuSelection.toLowerCase() == "paper") {
        console.log("WIN !");
        return "win"
    }
    else if (playerSelection.toLowerCase() == cpuSelection.toLowerCase()) {
        console.log("TIE.");
        return "tie"
    }else {
        console.log("LOOSE !");
        return "lose"
    }
}

const btn = document.querySelectorAll('button');

btn.forEach((button) => {
    button.addEventListener('click', () => {
        const cpuChoice = getComputerChoice();
        playRound(button.className, cpuChoice);

        const container = document.querySelector('#result');
        const content = document.createElement('div');

        content.classList.add('content');
        content.textContent = `Computer choice: ${getComputerChoice()}`;
        container.appendChild(content);
    })
});

function game() {
    let roundResult = 0;
    const playerSelection = prompt();
    
    for (let i = 0; i < 5; i++) {
        let cpu = getComputerChoice(); 

        console.log(`Player Selection: ${playerSelection}`);
        console.log(`Computer Selection: ${cpu}`);

        if (playRound(playerSelection, cpu) == "win") {
            roundResult += 1;
            console.log(`You win! ${playerSelection} beats ${cpu}`);
        }
        else if (playRound(playerSelection, cpu) == "lose"){
            roundResult -= 1;
            console.log(`You lose! ${cpu} beats ${playerSelection}`);
        }else {
            console.log("It's a tie.");
        } 
    }

    if (roundResult >= 2) {
        console.log("You won the match !");
    }else {
        console.log("You lost the match.");
    }
}

// game();
