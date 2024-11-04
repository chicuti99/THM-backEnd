const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Players', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TeamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Teams',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    position: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    section: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dateOfBirth: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    shirtNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    playedMatches: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    goals: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    assists: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    penalties: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    competitionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Players',
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
        name: "TeamId",
        using: "BTREE",
        fields: [
          { name: "TeamId" },
        ]
      },
    ]
  });
};
