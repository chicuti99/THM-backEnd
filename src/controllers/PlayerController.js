import Player from '../models/Player.js'

class PlayerController {
    async getPlayers(req, res) {
        const {id} = req.query;
        try {
            const players = await Player.findAll({
                where:{
                    competitionId:id
                }
            });
            return res.json(players );
        } catch (error) {
            console.error(error);
            const errorMessage = error.response?.data?.message || 'Erro ao obter dados da API de futebol.';
            const errorCode = error.response?.status || 500;
            return res.status(errorCode).json({ message: errorMessage });
        }
    }
}

export default PlayerController;
