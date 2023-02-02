import './style.css';
import addScore from './modules/addScore.js';
import ScoreList from './modules/scoreList.js';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const form = document.getElementById('score-form');
const list = new ScoreList();

const showScore = async () => {
  const scoreList = document.querySelector('.score-list');
  scoreList.innerHTML = '';
  const lists = await list.getScore();

  if (lists.length > 0) {
    lists.sort((a, b) => b.score - a.score);
    lists.forEach((list, index) => {
      const colors = ['#d444ca', '#edbae8', '#312250', '#579690', '#c4b4d4', '#406855'];
      const bgColor = colors[index % colors.length];
      const fullName = list.user;
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="user">
          <div class="user-name">         
          <p class="rank">
            ${index + 1}
          </p>
          <div class="avatar" style="background-color:${bgColor}">
           <p style="color: white">
           ${fullName.split(' ')[0].charAt(0).toUpperCase()}${
  fullName.split(' ').length > 1
    ? fullName.split(' ')[1].charAt(0).toUpperCase()
    : ''
}
           </p>           
          </div>
            <h3> ${fullName}</h3>
          </div>
         <h3> ${list.score}</h3>
        </div>  
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
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
});

const referesh = document.getElementById('referesh');
referesh.addEventListener('click', () => {
  showScore();
});

showScore();
