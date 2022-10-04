function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    const cpuChoice = Math.floor(Math.random() * 3);
    return choice[cpuChoice]
}


function playRound(playerSelection, cpuSelection) {

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
        return "lose"
    }
}

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

game();
