// models/Match.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; 
import Team from './Team.js';

const Match = sequelize.define('Match', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    utcDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    matchday: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    // lastUpdated: {
    //     type: DataTypes.DATE,
    //     allowNull: true
    // },
    scoreWinner: {
        type: DataTypes.STRING,
        allowNull: true
    },
    scoreDuration: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fullTimeHome: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fullTimeAway: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    halfTimeHome: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    halfTimeAway: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    homeTeamId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    awayTeamId :{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    competitionId : {
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
  timestamps:false
});

Match.belongsTo(Team, { as: 'homeTeam', foreignKey: 'homeTeamId' });
Match.belongsTo(Team, { as: 'awayTeam', foreignKey: 'awayTeamId' });

export default Match;
