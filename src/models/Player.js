import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; import Team from "./Team.js"; 

const Player = sequelize.define('Player',{
    id:{
        type: DataTypes.NUMBER,
        allowNull:false,
        primaryKey:true
    },
    TeamId:{
        type: DataTypes.NUMBER,
        allowNull:false,
        references:{
            model: Team,
            key: 'id'  
        }
    },
    competitionId:{
        type: DataTypes.NUMBER,
        allowNull:false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    position:{
        type: DataTypes.STRING,
        allowNull: true
    },
    section:{
        type: DataTypes.STRING,
        allowNull: true
    },
    dateOfBirth:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nationality:{
        type: DataTypes.STRING,
        allowNull: false
    },
    shirtNumber:{
        type:DataTypes.NUMBER,
        allowNull:true
    },
    playedMatches:{
        type:DataTypes.NUMBER,
        allowNull:true
    },
    goals:{
        type:DataTypes.NUMBER,
        allowNull:true
    },
    assists:{
        type:DataTypes.NUMBER,
        allowNull:true
    },
    penalties:{
        type:DataTypes.NUMBER,
        allowNull:true  
    }
},{
    timestamps:false
})

Player.belongsTo(Team, { foreignKey: 'TeamId' });
Team.hasMany(Player, { foreignKey: 'TeamId' });
export default Player;