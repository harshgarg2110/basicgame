function startGame() {
    const userInput = document.getElementById("userInput").value;
    
    // Check if user input is valid
    if (userInput < 1 || userInput > 100 || isNaN(userInput)) {
      document.getElementById("output").innerHTML = "Invalid input. Please enter a number between 1 and 100.";
      return;
    }
    
    let computerGuess;
    let low = 1;
    let high = 100;
    let attempts = 0;
    
    // Computer has 6 chances to guess the number
    while (attempts < 6) {
      computerGuess = Math.floor(Math.random() * (high - low + 1)) + low;
      attempts++;
      
      // If computer guesses correctly, user loses
      if (computerGuess == userInput) {
        document.getElementById("output").innerHTML = "The computer guessed " + computerGuess + ". You lose!";
        return;
      }
      
      // If computer's guess is too low, adjust the low end of the range
      if (computerGuess < userInput) {
        low = computerGuess + 1;
      }
      
      // If computer's guess is too high, adjust the high end of the range
      if (computerGuess > userInput) {
        high = computerGuess - 1;
      }
    }
    
    // If computer can't guess the number within 5 attempts, user wins
    document.getElementById("output").innerHTML = "The computer couldn't guess the number. You win!";
  }
