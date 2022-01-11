'use strict';
/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').innerHTML = '🎉 Correct Number!'; */

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.number').innerHTML = secretNumber;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //   console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').innerHTML = '⛔ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').innerHTML = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').innerHTML = 'Too High!';
      score--;
      document.querySelector('.score').innerHTML = score;
    } else {
      document.querySelector('.message').innerHTML = 'You lost the game';
      document.querySelector('.score').innerHTML = 0;
      document.body.style.backgroundColor = 'red';
    }
  } else if (guess < secretNumber) {
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
