import './style.css';
import addScore from './modules/addScore.js';
import ScoreList from './modules/scoreList.js';

const form = document.getElementById('score-form');
const list = new ScoreList();

const showScore = () => {
  const scoreList = document.querySelector('.score-list');
  scoreList.innerHTML = '';
  const lists = list.getList();

  if (lists.length > 0) {
    lists.forEach((list) => {
      const li = document.createElement('li');
      li.innerHTML = `
         ${list.name}: ${list.score}
      `;
      scoreList.appendChild(li);
    });
  } else {
    scoreList.innerHTML = 'There is no score for now.';
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;

  addScore(name, score);
  showScore();
});

showScore();