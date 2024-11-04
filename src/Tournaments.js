import axios from 'axios';
import Competitions from './models/Competitions.js';

async function Tournaments() {
  const apiUrl = 'http://api.football-data.org/v4/competitions/';
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'X-Auth-Token': '5b5394d63c5541f5b69d5f4f413f0a39',
      },
    });

    const competitionsData = response.data.competitions.filter(comp =>
      ['BSA', 'BL1', 'PL', 'SA', 'PD'].includes(comp.code)
    ).map(comp => ({
      id: comp.id,
      flag: comp.area.flag,
      startDate: comp.currentSeason.startDate,
      endDate: comp.currentSeason.endDate,
      currentMatchDay: comp.currentSeason.currentMatchday,
      winner: comp.currentSeason.winner ? comp.currentSeason.winner.name : null,
      name: comp.name,
      code : comp.code
    }));
    await Competitions.bulkCreate(competitionsData);
    //await Competitions.update(competitionsData);
    console.log('Competições inseridas com sucesso!');
  } catch (error) {
    console.error('Erro ao popular competições:', error);
  }
}

Tournaments();

export default Tournaments;