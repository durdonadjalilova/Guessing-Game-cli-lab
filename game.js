const rls = require('readline-sync')

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  if(rls.keyInYN("Hi, do you want to play?")) {
    console.log("Let's start!")
    gameLoop()
  } else {
    console.log("Have a nice life!")
    quitGame()
  }

}

/**
 * Logs "Goodbye!"
 * Calls process.exit() to quit the game
 * 
 * @returns {undefined}
 */
const quitGame = () => {
  console.log("Goodbye!")
  process.exit()

}

/**
 * Controls the flow of the game.
 * Should prompt the user to play again once all
 * guesses have been made or correct answer guessed
 * 
 * @returns {undefined}
 */
const gameLoop = () => {
  console.log("I have a random number in mind")
  console.log("It's between 1 and 1000");
  console.log("You have 10 guesses total");
  let randomNum = generateRandomNumber();
  let guessNumber = rls.questionInt("Go ahead. Take a guess ")
  let guessCount = 10;
  
    if(guessNumber === randomNum) {
      console.log("Congrats! You got it right!");
      if(rls.keyInYN("Would you like to play again?")) {
        gameLoop()
      } else {
        quitGame();
        } 
      }
    else if(guessNumber > randomNum) {
        console.log("Your guess is too high");
        guessCount--
        gameLoop()

      } else if (guessNumber < randomNum) {
        console.log("Your guess is too low");
        guessCount--
        gameLoop()
      
      } 
      else if (guessCount === 0) {
          console.log("You lose!");
          quitGame()
        }
}

      




/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  let max = 1000
  let min = 1
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}