import { Router } from 'express';
import MatchController from '../controllers/MatchController.js';

const matchRouter = Router();
const matchController = new MatchController(); 

matchRouter.get("/matches", (req, res) => matchController.getMatches(req, res));

export default matchRouter;
