import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; 

const Team = sequelize.define('Team', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  shortName: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  tla:{
    type: DataTypes.STRING,
    allowNull: false
  },

  crest:{
    type: DataTypes.STRING,
    allowNull: false
  }
},{
    timestamps:false
});

export default Team;