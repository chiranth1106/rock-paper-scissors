let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const us = document.querySelector("#user-score");
const cs = document.querySelector("#computer-score");
const msg = document.querySelector("#msg");

const drawGame = () => {
    msg.innerHTML = "It's a draw!, play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    msg.innerHTML = userWin? 
    `you win!, ${userChoice} beats ${compChoice}`:
    `Computer wins!, ${compChoice} beats ${userChoice}`;
    
    // userWin? msg.style.backgroundColor = "green" : msg.style.backgroundColor = "red";
    msg.style.backgroundColor = userWin? "green" : "red"; 
    userWin? userScore++ : computerScore++;
    us.innerHTML = userScore;
    cs.innerHTML = computerScore;
};

const genCompChoice = () => {
    let option = ["rock", "paper", "scissor"];
    //rock, paper, scissors
    const randIdx = Math.floor(Math.random() *3);
    return option[randIdx];

};

const playGame = (userChoice) => {
    // console.log("user choice is = ",userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    // console.log("computer choice is = ", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, scissor
            userWin = compChoice === "scissor"? false : true;
        } else {
            //paper, rock
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }    
};

// const playGame = (userChoice) => {
//     console.log("user choice is = ", userChoice);
//     generate computer choice
//     const compChoice = genCompChoice();
//     console.log("computer choice is = ", compChoice);

//     if(userChoice === compChoice) {
//         drawGame();
//     } else {
//         let userWin = true;
//         if(userChoice === "rock") {
//             scissor, paper
//             userWin = compChoice === "paper" ? false : true;
//         } else if(userChoice === "paper") {
//             rock, scissor
//             userWin = compChoice === "scissor"? false : true;
//         } else {
//             paper, rock
//             userWin = compChoice === "rock"? false : true;
//         }
//         msg.innerHTML = userWin? "You win!" : "Computer wins!";
//         userWin? userScore++ : computerScore++;
//         us.innerHTML = userScore;
//         cs.innerHTML = computerScore;
//     }    
 
// };

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked!", userChoice);
        playGame(userChoice);
    });
});