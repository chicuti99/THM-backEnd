const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Matches', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    utcDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    matchday: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    homeTeamId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Teams',
        key: 'id'
      }
    },
    awayTeamId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Teams',
        key: 'id'
      }
    },
    scoreWinner: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    scoreDuration: {
      type: DataTypes.STRING(20),
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
    competitionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Competitions',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Matches',
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
        name: "homeTeamId",
        using: "BTREE",
        fields: [
          { name: "homeTeamId" },
        ]
      },
      {
        name: "awayTeamId",
        using: "BTREE",
        fields: [
          { name: "awayTeamId" },
        ]
      },
      {
        name: "fk_competition",
        using: "BTREE",
        fields: [
          { name: "competitionId" },
        ]
      },
    ]
  });
};
