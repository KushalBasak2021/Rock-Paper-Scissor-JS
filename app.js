let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector(".user-score");
const computerScore_span = document.querySelector(".computer-score");
const result_p = document.querySelector(".result p");
const rock_button = document.querySelector("#rock");
const paper_button = document.querySelector("#paper");
const scissors_button = document.querySelector("#scissors");

function computerChoice() {
  const compChoice = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return compChoice[randomNumber];
}

function game(userChoice) {
  if (userChoice === "rock") {
    if (computerChoice() === "rock") {
      result_p.innerHTML = `You choose: Rock and computer choose: Rock. It is a draw.`;
    } else if (computerChoice() === "paper") {
      result_p.innerHTML = `You choose: Rock and computer choose: Paper. You lose.`;
      computerScore++;
      computerScore_span.textContent = computerScore;
    } else {
      result_p.innerHTML = `You choose: Rock and computer choose: Scissors. You win!.`;
      userScore++;
      userScore_span.textContent = userScore;
    }
  } else if (userChoice === "paper") {
    if (computerChoice() === "rock") {
      result_p.innerHTML = `You choose: Paper and computer choose: Rock. You win!.`;
      userScore++;
      userScore_span.textContent = userScore;
    } else if (computerChoice() === "paper") {
      result_p.innerHTML = `You choose: Paper and computer choose: Paper. It is a draw.`;
    } else {
      result_p.innerHTML = `You choose: Paper and computer choose: Scissors. You lose!.`;
      computerScore++;
      computerScore_span.textContent = computerScore;
    }
  } else if (userChoice === "scissors") {
    if (computerChoice() === "rock") {
      result_p.innerHTML = `You choose: Scissors and computer choose: Rock. You lose.`;
      computerScore++;
      computerScore_span.textContent = computerScore;
    } else if (computerChoice() === "paper") {
      result_p.innerHTML = `You choose: Scissors and computer choose: Paper. You win!.`;
      userScore++;
      userScore_span.textContent = userScore;
    } else {
      result_p.innerHTML = `You choose: Scissors and computer choose: Scissors. It is a draw.`;
    }
  }
}

rock_button.addEventListener("click", () => {
  game("rock");
});

paper_button.addEventListener("click", () => {
  game("paper");
});

scissors_button.addEventListener("click", () => {
  game("scissors");
});
