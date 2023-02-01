export default class ScoreList {
    setList = (newScore) => {
      const scoreCollection = this.getList();
      scoreCollection.push(newScore);
      localStorage.setItem('Scores', JSON.stringify(scoreCollection));
    }

    getList = async () => {
      const lists = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/m6jsBD8Ruva3CFmD5qlX/scores/')
                          .then(response => response.json())
                          .then(data => data.result);            
      if (lists) return lists;
      return [];
    }
}