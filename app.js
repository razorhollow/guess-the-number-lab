const game = {
  title: 'Guess the Number!',
  biggestNum: null,
  smallestNum: null,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.setRange()
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    let guess
    do {
      guess = this.getGuess()
      this.render(guess, this.prevGuesses)
    }while (guess !== this.secretNum) 
    return ('Game Over')
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
      this.biggestNum = guess
      alert(`Your guess is too high. Previous guesses: ${arr.join(", ")}`)
    } else if (guess < this.secretNum){
      this.prevGuesses.push(guess)
      this.smallestNum = guess
      alert(`Your guess is too low. Previous guesses: ${arr.join(", ")}`)
    }
  },
  setRange: function(){
    this.biggestNum = parseInt(prompt(`Enter Largest Possible Number`))
    this.smallestNum = parseInt(prompt(`Enter Smallest Possible Number`))
  }
} 