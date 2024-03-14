const score = {
    wins: 0,
    losses: 0,
    ties: 0
  };

  function resetScore(){
    score.wins = 0 ;
    score.losses = 0 ;
    score.ties = 0 ;
    alert('Score was Reset');
  }

  TODO: function playGame(playerMove) {
    const computerMove3 = pickComputerMove();

    let result = "";

    if (playerMove === "Scissors") {
      if (computerMove3 === "Scissors") {
        result = "Tie";
      } else if (computerMove3 === "Rock") {
        result = "You lose";
      } else if (computerMove3 === "Paper") {
        result = "You win";
      }
    } else if (playerMove === "Paper") {
      if (computerMove3 === "Paper") {
        result = "Tie";
      } else if (computerMove3 === "Scissors") {
        result = "You lose";
      } else if (computerMove3 === "Rock") {
        result = "You win";
      }
    } else if (playerMove === "Rock") {
      if (computerMove3 === "Rock") {
        result = "Tie";
      } else if (computerMove3 === "Paper") {
        result = "You lose";
      } else if (computerMove3 === "Scissors") {
        result = "You win";
      }
    }
    console.log(result)

    if (result === "You win") {
      score.wins += 1;
    } else if (result === "You lose") {
      score.losses += 1;
    } else if (result === "Tie") {
      score.ties += 1;
    }
    console.log(score);

    alert(
      `You picked ${playerMove}. Computer picked ${computerMove3}. ${result} !
Wins: ${score.wins}, Losses:${score.losses}, Ties:${score.ties}`
    );
  }

  TODO: function pickComputerMove() {
    const randomNumber3 = Math.random();

    let computerMove3 = "";

    if (randomNumber3 >= 0 && randomNumber3 < 1 / 3) {
      computerMove3 = "Rock";
    } else if (randomNumber3 >= 1 / 3 && randomNumber3 < 2 / 3) {
      computerMove3 = "Paper";
    } else if (randomNumber3 >= 2 / 3 && randomNumber3 < 1) {
      computerMove3 = "Scissors";
    }
    console.log(computerMove3);

    return computerMove3;
  }
  function counter(){
    document.getElementById("Scoree").innerHTML = `Wins:| ${score.wins} | Losses:${score.losses} | Ties:${score.ties} |`;
  }