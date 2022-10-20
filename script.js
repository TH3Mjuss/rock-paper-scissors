function getComputerChoice() { // Make the computer choose randomly between rock, paper or scissors 
    const choice = ["rock", "paper", "scissors"];
    const cpuChoice = Math.floor(Math.random() * 3);

    return choice[cpuChoice]
}


function playRound(playerSelection, cpuSelection) { // check who wins between computer or player

    if (playerSelection.toLowerCase() == "rock" && cpuSelection.toLowerCase() == "scissors") {
        return "win"
    }
    else if (playerSelection.toLowerCase() == "paper" && cpuSelection.toLowerCase() == "rock") {
        return "win"
    }
    else if (playerSelection.toLowerCase() == "scissors" && cpuSelection.toLowerCase() == "paper") {
        return "win"
    }
    else if (playerSelection.toLowerCase() == cpuSelection.toLowerCase()) {
        return "tie"
    }else {
        return "loose"
    }
}

function gameResult(array) { // Returns the result of a Bo5 game from single match results in an array
    let win = 0;
    let loose = 0;
    let tie = 0;
    let result;

    for (item in array) {
        if (array[item] == 'win') {
            win += 1;
        } else if (array[item] == 'loose') {
            loose += 1;
        } else {
            tie += 1;
        }
    }

    if (win > loose && (win > tie || win == tie)) {
        result = 'win';
    } else if (loose > win && (loose > tie || loose == tie)) {
        result = 'loose';
    } else {
        result = 'tie';
    }

    return result;
}

const btn = document.querySelectorAll('button');
let btnPressed;
let cpu;
let roundResult = [];

const container = document.querySelector('#result');
const content = document.createElement('div');

btn.forEach((button) => {
    button.addEventListener('click', () => {

        btnPressed = button.className;
        cpu = getComputerChoice();
        let round = playRound(btnPressed, cpu);

        roundResult.push(round);
        content.innerText = `ROUND : ${roundResult.length}
                User choice: ${btnPressed}
                Computer choice: ${cpu} 
                Result: ${round}`;
        if (roundResult.length == 5) {

            content.innerText += `\n Round results: ${roundResult}`;
            content.innerText += `\n Match over! It's a: ${gameResult(roundResult).toUpperCase()} !`;
            roundResult = [];
        }
    })
});

content.classList.add('content');
container.appendChild(content);
