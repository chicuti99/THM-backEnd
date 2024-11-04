import { Router } from 'express';
import PlayerController from '../controllers/PlayerController.js';
const playerRoutes = Router();
const playerController = new PlayerController(); 


playerRoutes.get("/player", (req, res) => playerController.getPlayers(req, res));

export default playerRoutes;
