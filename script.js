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
    const computerResult = getRandomComputerResult();
  
    if (hasPlayerWonTheRound(userOption, computerResult)) {
      playerScore++;
      return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
      return `It's a tie! Both chose ${userOption}`;
    } else {
      computerScore++;
      return `Computer wins! ${computerResult} beats ${userOption}`;
    }
  }

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");


function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
  if (computerScore === 3) {
    winnerMsgElement.innerText = "Computer has won the game!";
    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "initial";

  } else if (playerScore === 3) {
    winnerMsgElement.innerText = "Player has won the game!";
    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "initial";

  }

};

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = " ";
};