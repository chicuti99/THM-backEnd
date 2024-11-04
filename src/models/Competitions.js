import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; 

const Competitions = sequelize.define('Competition', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  flag: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  currentMatchDay: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  winner: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  name:{
    type: DataTypes.STRING,
    allowNull: false
  },

  code:{
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Competitions;
