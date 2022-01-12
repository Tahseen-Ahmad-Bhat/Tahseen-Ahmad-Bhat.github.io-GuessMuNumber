'use strict';
/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').innerHTML = '🎉 Correct Number!'; */

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highestScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //   console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').innerHTML = '⛔ No Number!';
  }

  // When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').innerHTML = '🎉 Correct Number!';
    document.querySelector('.number').innerHTML = secretNumber;

    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highestScore) {
      highestScore = score;
      console.log(highestScore);
      document.querySelector('.highscore').innerHTML = highestScore;
    }
  }

  // When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').innerHTML = 'Too High!';
      score--;
      document.querySelector('.score').innerHTML = score;
    } else {
      document.querySelector('.message').innerHTML = 'You lost the game';
      document.querySelector('.score').innerHTML = 0;
      document.body.style.backgroundColor = 'red';
    }
  }

  // When guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').innerHTML = 'Too Low!';
      score--;
      document.querySelector('.score').innerHTML = score;
    } else {
      document.querySelector('.message').innerHTML = 'You lost the game';
      document.querySelector('.score').innerHTML = 0;
      document.body.style.backgroundColor = 'red';
    }
  }
});
