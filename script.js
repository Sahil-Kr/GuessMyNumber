'use strict';

const setText = (className, text) => {
  document.querySelector(`.${className}`).textContent = `${text}`;
};

const generateRandom = () => Math.trunc(Math.random() * 20) + 1;

let sceretNumber = generateRandom();
let score = 20;
let highScore = 0;

const onClickCheck = () => {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    setText('message', '⛔ No Number');
  }
  //When player wins
  else if (guess === sceretNumber) {
    setText('message', '🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    setText('number', sceretNumber);
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      setText('highscore', highScore);
    }
  }
  //When guess is high or low
  else {
    if (score > 1) {
      setText('message', guess > sceretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      setText('score', score);
    } else {
      setText('message', '😢 You lost the game');
      setText('score', 0);
    }
  }
};

const onClickReset = () => {
  score = 20;
  setText('message', '🤔 Start guessing...');
  setText('score', score);
  setText('number', '?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  sceretNumber = generateRandom();
};

document.querySelector('.check').addEventListener('click', onClickCheck);

document.querySelector('.again').addEventListener('click', onClickReset);
