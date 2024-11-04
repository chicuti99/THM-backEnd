import axios from 'axios';
import Standing from './models/Standing.js';

async function standings(name){

    const apiUrl = `https://api.football-data.org/v4/competitions/${name}/standings`
    console.log('apiii',apiUrl)
    try{
        const response = await axios.get(apiUrl, {
            headers: {
              'X-Auth-Token': '5b5394d63c5541f5b69d5f4f413f0a39',
            },
          });

          const standingData = response.data.standings[0].table.map((standing)=>({
            position: standing.position,
            playedGames: standing.playedGames,
            won: standing.won,
            draw: standing.draw,
            lost: standing.lost,
            points: standing.points,
            goalsFor: standing.goalsFor,
            goalsAgainst: standing.goalsAgainst,
            goalDifference: standing.goalDifference,
            teamId: standing.team.id,
            competitionId: response.data.competition.id
          }));
          await Standing.bulkCreate(standingData);
          console.log('deu certo',apiUrl);
    }
    catch(err){
        console.log('deu errado',apiUrl,err);
    }
}
standings();

export default standings;