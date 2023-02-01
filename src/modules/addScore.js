import ScoreList from './scoreList.js';

const list = new ScoreList();

const addScore = (name, score) => {
  const newScore = {
    name,
    score,
  };
  
  list.setList(newScore);
};

export default addScore;