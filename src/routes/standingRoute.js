import { Router } from 'express';
import StandingController from '../controllers/StandingController.js';
const standingRouter = Router();
const standingController = new StandingController(); 

standingRouter.get("/standings", (req, res) => standingController.getStandings(req, res));

export default standingRouter;
