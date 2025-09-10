console.log("hello world");

/*
 * getComputerChoice Function
 * set computerChoice = undefined
 * get a random number between 1 and 3
 * if it's 1, give rock
 * if it's 2, give paper
 * if it's 3, give scissors
 * return computerChoice
 */

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
