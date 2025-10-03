const dialogue = document.getElementById("dialogue");
const humanScoreDisplay = document.getElementById("humanScore");
const computerScoreDisplay = document.getElementById("computerScore");
function getComputerChoice() {
  let computerChoice;
  let computerChoicePrecursor = Math.floor(Math.random() * 2) + 1;
  switch (computerChoicePrecursor) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

function getHumanChoice() {
  let choice;
  choice = prompt("Enter rock, paper, or scissors");
  return choice;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  /*
   * if the two choices are the same, print (it's a tie)
   * set a funtion called "winner"
   * for each case, evaluate the winner
   * use an if statement to output a print of the winner & incriment the score
   *
   */
  if (humanChoice == computerChoice) {
    dialogue.innerText = "It's a tie";
    return;
  }

  let winner;

  switch (humanChoice + computerChoice) {
    case "rockpaper":
      computerChoice;
      winner = "computer";
      break;
    case "rockscissors":
      winner = "human";
      break;
    case "paperscissors":
      winner = "computer";
      break;
    case "paperrock":
      winner = "human";
      break;
    case "scissorsrock":
      winner = "computer";
      break;
    case "scissorspaper":
      winner = "human";
      break;
  }

  if (winner == "human") {
    dialogue.innerText = `You win! ${humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice(1, humanChoice.length)} beats ${computerChoice}.`;
    humanScore += 1;
  } else {
    dialogue.innerText = `You loose. ${computerChoice.slice(0, 1).toUpperCase() + computerChoice.slice(1, computerChoice.length)} beats ${humanChoice}.`;
    computerScore += 1;
  }
  humanScoreDisplay.innerText = humanScore;
  computerScoreDisplay.innerText = computerScore;

  // end the game when a player reaches 5
  if (humanScore == 5 || computerScore == 5) {
    requestAnimationFrame(() => {
      alert(
        `And we have a winner: ${humanScore == 5 ? "You!" : "The Computer 👹"}`,
      );
    });
    humanScore = 0;
    computerScore = 0;
  }

  return winner;
}


const buttons = document.querySelectorAll("#buttonsDiv button");
function onButtonClick(e) {
  let selectedOption = e.target.innerText.toLowerCase();
  playRound(selectedOption, getComputerChoice());
}
console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", onButtonClick);
});
