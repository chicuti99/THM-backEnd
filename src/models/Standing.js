import sequelize from '../config/db.js';
import { DataTypes } from 'sequelize';
import Team from './Team.js';
import Competitions from './Competitions.js';

const Standing = sequelize.define('Standing', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  
  currentMatchDay: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  playedGames: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  won: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  draw: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  lost: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  points: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  goalsFor: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  goalsAgainst: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  goalDifference: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  teamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Team,          
      key: 'id'             
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },
  competitionId: {
    type: DataTypes.INTEGER,
    allowNull: false, 
    references: {
      model: Competitions,   
      key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  }
}, {
  timestamps: false
});

Team.hasMany(Standing, { foreignKey: 'teamId' });
Standing.belongsTo(Team, { foreignKey: 'teamId' });

Competitions.hasMany(Standing, { foreignKey: 'competitionId' });
Standing.belongsTo(Competitions, { foreignKey: 'competitionId' });

export default Standing;


