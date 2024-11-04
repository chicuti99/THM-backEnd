import axios from 'axios';
import Player from './models/Player.js';

async function player(name){

    const apiUrl = `https://api.football-data.org/v4/competitions/${name}/scorers`
    try{
        const response = await axios.get(apiUrl, {
            headers: {
              'X-Auth-Token': '5b5394d63c5541f5b69d5f4f413f0a39',
            },
          });

          const playerData = response.data.scorers.map((player)=>({
            TeamId: player.team.id,
            competitionId: response.data.competition.id,
            id: player.player.id,
            position: player.player.position,
            name: player.player.name,
            section: player.player.section,
            dateOfBirth: player.player.dateOfBirth,
            nationality: player.player.nationality,
            shirtNumber: player.player.shirtNumber,
            playedMatches: player.playedMatches,
            goals: player.goals,
            assists: player.assists,
            penalties:player.penalties
          }
        ));

          await Player.bulkCreate(playerData);
          console.log('deu certo',apiUrl);

    }
    catch(err){
        console.log('deu errado',apiUrl,err);
    }
}
player();

export default player;