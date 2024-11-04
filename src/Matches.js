import axios from 'axios';
import Match from './models/Match.js';

async function Matches(id){
    const apiUrl = `http://api.football-data.org/v4/competitions/${id}/matches`
    try{
        const response = await axios.get(apiUrl, {
            headers: {
              'X-Auth-Token': '5b5394d63c5541f5b69d5f4f413f0a39',
            },
          });
          const matchsData = response.data.matches.map((match) => ({
            id: match.id,
            utcDate: match.utcDate,
            status: match.status,
            matchday: match.matchday,
            homeTeamId: match.homeTeam.id,
            awayTeamId: match.awayTeam.id,
            scoreWinner: match.score.winner,
            halfTimeAway :match.score.halfTime.away,
            halfTimeHome:match.score.halfTime.home,
            fullTimeHome: match.score.fullTime.home,
            fullTimeAway: match.score.fullTime.away,
            referee: match.referees[0]?.name,
            competitionId: response.data.competition.id
          }))
          
          await Match.bulkCreate(matchsData);
          console.log('deu certo',apiUrl)
    }
    catch(err){
        console.log('deu errado',apiUrl,err);
    }
}

export default Matches;

Matches();