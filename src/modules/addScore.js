import ScoreList from './scoreList.js';

const list = new ScoreList();

const addScore = (name, score) => {
  const newScore = {
    name,
    score,
  };

  list.setScore(newScore);
};

export default addScore;