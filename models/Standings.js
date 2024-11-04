const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Standings', {
    currentMatchDay: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    playedGames: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    won: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    draw: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    goalsFor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    goalsAgainst: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    goalDifference: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Teams',
        key: 'id'
      }
    },
    competitionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Competitions',
        key: 'id'
      }
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'Standings',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "teamId",
        using: "BTREE",
        fields: [
          { name: "teamId" },
        ]
      },
      {
        name: "competitionId",
        using: "BTREE",
        fields: [
          { name: "competitionId" },
        ]
      },
    ]
  });
};
