import { Router } from 'express';
import CompetitionController from '../controllers/CompetitionController.js';

const competitionRouter = Router();
const competitionController = new CompetitionController(); 

competitionRouter.get("/competitions", (req, res) => competitionController.getCompetitions(req, res));

export default competitionRouter;
