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
function playGame() {
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
      console.log("It's a tie");
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
      console.log(
        `You win! ${humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice(1, humanChoice.length)} beats ${computerChoice}.`,
      );
      humanScore += 1;
    } else {
      console.log(
        `You loose. ${computerChoice.slice(0, 1).toUpperCase() + computerChoice.slice(1, computerChoice.length)} beats ${humanChoice}.`,
      );
      computerScore += 1;
    }

    return winner;
  }

  /*
   * set a variable called gamecount
   * run a while statment (while gamecount < 5)
   * afterwards return the winner
   */

  for (gameCount = 0; gameCount < 5; gameCount++) {
    let human = getHumanChoice();
    let computer = getComputerChoice();
    playRound(human, computer);
  }

  finalWinner = humanScore > computerScore ? "human" : "computer";
  console.log(`The final winner is ${finalWinner}`);
  return finalWinner;
}
