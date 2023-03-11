'use strict';
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const body = document.querySelector('body');
const check = document.querySelector('.check');
const highscoreText = document.querySelector('.highscore');
const scoreText = document.querySelector('.score');
const againBtn = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (text) {
  message.textContent = text;
};

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('No number ⛔️');
    // When player wins
  } else if (guess < 1 || guess > 20) {
    displayMessage('❗️❗️❗️ Invalid Input ❗️❗️❗️');
  } else if (guess === secretNumber) {
    displayMessage('Correct number ✅');
    number.textContent = secretNumber;

    body.style.backgroundColor = '#60b347';

    number.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreText.textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high 📈' : 'Too low 📈');
      score--;
      scoreText.textContent = score;
    } else {
      displayMessage('You lost the game! 💥');
      scoreText.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  scoreText.textContent = score;
  number.textContent = '?';

  document.querySelector('.guess').value = '';
  body.style.backgroundColor = '#222';

  number.style.width = '15rem';
});
