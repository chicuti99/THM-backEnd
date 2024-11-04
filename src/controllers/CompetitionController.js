import Competitions from '../models/Competitions.js';

class CompetitionController {
    async getCompetitions(req, res) {
        try {
            const {id} = req.query;
            if(id){
                const competitions = await Competitions.findAll({
                    where:{
                        id:id
                    }
                });
                return res.json({competitions });
            }

            else{
                const competitions = await Competitions.findAll();
                return res.json({competitions})
            }
            
        } catch (error) {
            console.error(error);
            const errorMessage = error.response?.data?.message || 'Erro ao obter dados da API de futebol.';
            const errorCode = error.response?.status || 500;
            return res.status(errorCode).json({ message: errorMessage });
        }
    }
}


export default CompetitionController;
