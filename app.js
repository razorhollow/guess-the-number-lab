const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },
  getGuess: function() {
    let currentGuess
    let input = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
    while (!currentGuess){
      if( input >= this.smallestNum && input <= this.biggestNum){ //not working with negative numbers//
        currentGuess = input} else {
          alert('Invalid Input, Try Again')
          input = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
          currentGuess = false
        }
      }
     return currentGuess
    } 
  } 
