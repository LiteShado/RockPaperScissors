// this code returns a random answer based on assigning a numerical answer to it's assigned answer in the array

function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const length = options.length;
    const answer = (Math.floor(Math.random()* length));
    console.log(answer);
    console.log(options[answer]);
    return options[answer];
  
  }
  console.log(getRandomComputerResult());