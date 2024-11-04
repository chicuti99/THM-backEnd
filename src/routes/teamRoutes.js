import { Router } from 'express';
import TeamController from '../controllers/TeamController.js';
const teamRoutes = Router();
const teamController = new TeamController();

teamRoutes.get("/teams", (req, res) => teamController.getTeams(req, res));

export default teamRoutes;
