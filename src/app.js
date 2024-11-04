import express from 'express';
import matchRoutes from './routes/matchRoutes.js';
import standingRouter from './routes/standingRoute.js';
import competitionRouter from './routes/competitionsRoutes.js' 
import cors from 'cors';
import teamRoutes from './routes/teamRoutes.js';
import playerRoutes from './routes/playerRoutes.js';
const app = express();

app.use(cors({
    origin: 'http://localhost:5173' 
  }));
app.use(express.json());

app.use('/', standingRouter)
app.use('/', competitionRouter);
app.use('/', matchRoutes);
app.use('/',teamRoutes)
app.use('/',playerRoutes)


export default app;
