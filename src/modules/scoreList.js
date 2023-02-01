export default class ScoreList {
    setList = (newScore) => {
      const scoreCollection = this.getList();
      scoreCollection.push(newScore);
      localStorage.setItem('Scores', JSON.stringify(scoreCollection));
    }

    getList = () => {
      const lists = JSON.parse(localStorage.getItem('Scores'));
      if (lists) return lists;
      return [];
    }
}