const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    let guess
    do {
      guess = this.getGuess()
      this.render(guess, this.prevGuesses)
    }while (guess !== this.secretNum) 
    }

  ,
  getGuess: function() {
    let currentGuess
    let input = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
    while (!currentGuess){
      if( input >= this.smallestNum && input <= this.biggestNum){ 
        currentGuess = input} else {
          alert('Invalid Input, Try Again')
          input = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
          currentGuess = false
        }
      }
     return currentGuess
    }
  ,
  render: function(guess, arr) {
    if (guess === this.secretNum) {
      alert(`Congrats! You guessed the number in ${arr.length + 1}!`)
    } else if (guess > this.secretNum){
      this.prevGuesses.push(guess)
      alert(`Your guess is too high. Previous guesses: ${arr.join(", ")}`)
    } else if (guess < this.secretNum){
      this.prevGuesses.push(guess)
      alert(`Your guess is too low. Previous guesses: ${arr.join(", ")}`)
    }
  }
} 

// 5. Add a `render` method to `game` that `play` will call after a guess has been made that alerts:
//   - If the secret has been guessed: `Congrats! You guessed the number in [number of prevGuesses]!`
//   - Otherwise: `Your guess is too [high|low] Previous guesses: x, x, x, x`
//   - Hints:
//       - `render` won’t be able to access any of `play`’s local variables, e.g., `guess`, so be sure pass `render` any arguments as needed (you may not have built your program to use any, that's ok if that's the case!)
//       - Template literals not only have interpolation, but they also honor whitespace - including line breaks!
//       - The list of previous guesses can be generated using the array `join` method.
// 6. The `play` method should end (`return`) when the guess matches `secretNum`.

// ## Level Up 🚀

// - If the player enters a number greater than the `secretNum` make it the new `biggestNum`, so that the player can't enter a number greater than it. If the player enters a number that is less than the `secretNum` make it the new `smallestNum`, so that the player can't enter a number less than it. Hint: You may want to add a helper function to accomplish this.

// ## More Level Up 🚀

// When `play` is run, immediately prompt the player to enter the smallest and biggest numbers instead of pre-setting values.