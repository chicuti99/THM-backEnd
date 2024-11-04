import Standing from '../models/Standing.js';
import Team from '../models/Team.js';

class StandingController {
    async getStandings(req, res) {
        const {id} = req.query;
        try {
            const standings = await Standing.findAll({
                include: {
                    model: Team,
                    as: 'team'
                },
                where:{
                    competitionId:id
                }
            });
            return res.json({standings });
        } catch (error) {
            console.error(error);
            const errorMessage = error.response?.data?.message || 'Erro ao obter dados da API de futebol.';
            const errorCode = error.response?.status || 500;
            return res.status(errorCode).json({ message: errorMessage });
        }
    }
}

Standing.belongsTo(Team, { foreignKey: 'teamId', as: 'team' });

export default StandingController;
