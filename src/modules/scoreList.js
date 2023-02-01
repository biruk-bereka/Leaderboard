export default class ScoreList {
    setScore = async (newScore) => {
      await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/m6jsBD8Ruva3CFmD5qlX/scores/', {
        method: 'POST',
        body: JSON.stringify({
          user: newScore.name,
          score: newScore.score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json());
    }

    getScore = async () => {
      const lists = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/m6jsBD8Ruva3CFmD5qlX/scores/')
        .then((response) => response.json())
        .then((data) => data.result);
      if (lists) return lists;
      return [];
    }
}