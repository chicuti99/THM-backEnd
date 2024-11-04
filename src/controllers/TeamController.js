import Team from "../models/Team.js";
class TeamController {

    async getTeams(req,res) {
        //const {id} = req.query;
        try {
            // if(id){
            //     const team = Team.findAll();
            //     return res.json(team); 
            // }

            // else{
            //     const team = await Team.findAll()
            //     return res.json(team)
            // }

            const team = await Team.findAll();
            return res.json(team)
        } catch (error) {
            console.error(error);
            const errorMessage = error.response?.data?.message || 'Erro ao obter dados da API de futebol.';
            const errorCode = error.response?.status || 500;
            return res.status(errorCode).json({ message: errorMessage });
        }
    }
}

export default TeamController;
