// this code returns a random answer based on assigning a numerical answer to it's assigned answer in the array

function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const answer = (Math.floor(Math.random()* options.length));
    return options[answer];
  }
  console.log(getRandomComputerResult());

  function hasPlayerWonTheRound(player, computer) {
    let user = player;
    let comp = computer;
    if (user === "Rock" && comp === "Scissors" || user === "Scissors" && comp === "Paper" || user === "Paper" && comp === "Rock") {
      return true;
    } else {
      return false;
    }
  }

  let compChoice = getRandomComputerResult();

function getRoundResults(userOption) {
  
  if (hasPlayerWonTheRound = true) {
    playerScore++;
    return "Player wins! "+ userOption + " beats "+ compChoice;
  } else if (hasPlayerWonTheRound = false) {
    computerScore++;
    return "Computer wins! "+ compChoice + " beats "+ userOption;
  } else {
    return "It's a tie! Both chose "+ userOption;
  }
 
}
