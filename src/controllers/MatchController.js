import Match from '../models/Match.js'

class MatchController {

    async getMatches(req,res) {
        const {id} = req.query;
        try {
            if(id){
                const match = await Match.findAll({
                    where:{
                        competitionId: id
                    }
                });
                return res.json(match); 
            }

            else{
                const match = await Match.findAll()
                return res.json(match)
            }
        } catch (error) {
            console.error(error);
            const errorMessage = error.response?.data?.message || 'Erro ao obter dados da API de futebol.';
            const errorCode = error.response?.status || 500;
            return res.status(errorCode).json({ message: errorMessage });
        }
    }
}

export default MatchController;
