'use strict';
/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').innerHTML = '🎉 Correct Number!'; */

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highestScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').innerHTML = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //   console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').innerHTML = '⛔ No Number!';
    displayMessage('⛔ No Number!');
  }

  // When player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').innerHTML = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').innerHTML = secretNumber;

    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highestScore) {
      highestScore = score;
      console.log(highestScore);
      document.querySelector('.highscore').innerHTML = highestScore;
    }
  }

  // When the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      /* document.querySelector('.message').innerHTML =
        guess > secretNumber ? 'Too High!' : 'Too Low!'; */
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').innerHTML = score;
    } else {
      // document.querySelector('.message').innerHTML = 'You lost the game';
      displayMessage('You lost the game');
      document.querySelector('.score').innerHTML = 0;
      document.body.style.backgroundColor = 'red';
    }
  }
});

// Targetiing again button
const Again = document.querySelector('.again');
Again.addEventListener('click', () => {
  document.body.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').innerHTML = '?';

  score = 20;
  document.querySelector('.score').innerHTML = score;
  // document.querySelector('.message').innerHTML = 'Start guessing...';
  displayMessage('Start guessing...');
});
