'use strict';

let guessNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (message) {
  document.querySelector('.number').textContent = message;
};

const startGame = function (guess) {
  //when guess is empty
  if (!guess) {
    displayMessage('⛔ No number !');

    //when guess is equal to guess number
  } else if (guess === guessNumber) {
    displayMessage('🎉 Correct Number');

    document.querySelector('.number').style.width = '30rem';

    displayNumber(guessNumber);
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.body.style.backgroundColor = 'green';

    //when guess is wrong
  } else if (guess !== guessNumber) {
    if (score > 1) {
      displayMessage(guess > guessNumber ? '📈 Too heigh !' : '📉 Low heigh !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score = 0;
      document.querySelector('.score').textContent = score;
      displayMessage('😟 you lost the game');
    }
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //any value we get from screen will convert into string
  console.log(guessNumber);

  startGame(guess);
});

//new game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  //reset check box
  document.querySelector('.guess').value = '';
  //reset guess number
  displayNumber('?');
  document.querySelector('.number').style.width = '15rem';
  //reset score
  document.querySelector('.score').textContent = score;
  // new random number
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(guessNumber);
  //reset message
  displayMessage('Start guessing...');
  // reset background color
  document.body.style.backgroundColor = '#222';
});
