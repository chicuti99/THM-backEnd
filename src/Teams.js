import axios from 'axios';
import Team from './models/Team.js';

async function Teams(id){
    const apiUrl = `http://api.football-data.org/v4/competitions/${id}/teams`

    try{
        const response = await axios.get(apiUrl, {
            headers: {
              'X-Auth-Token': '5b5394d63c5541f5b69d5f4f413f0a39',
            },
          });

          const teamData = response.data.teams.map((team)=>({
            id: team.id,
            name: team.name,
            shortName: team.shortName,
            tla: team.tla,
            crest: team.crest
          }));
          await Team.bulkCreate(teamData);
          console.log('deu certo')
    }
    catch(err){
        console.log('deu errado',err);
    }
}

export default Teams;

Teams();
