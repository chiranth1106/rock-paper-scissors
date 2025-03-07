let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const us = document.querySelector("#user-score");
const cs = document.querySelector("#computer-score");
const msg = document.querySelector("#msg");

const drawGame = () => {
    msg.innerHTML = "It's a draw!";
};

const showWinner = (userWin) => {
    msg.innerHTML = userWin? "You win!" : "Computer wins!";
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
        showWinner(userWin);
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