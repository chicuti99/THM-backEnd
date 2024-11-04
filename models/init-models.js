var DataTypes = require("sequelize").DataTypes;
var _Competitions = require("./Competitions");
var _Matches = require("./Matches");
var _Players = require("./Players");
var _SequelizeMeta = require("./SequelizeMeta");
var _Standings = require("./Standings");
var _Teams = require("./Teams");

function initModels(sequelize) {
  var Competitions = _Competitions(sequelize, DataTypes);
  var Matches = _Matches(sequelize, DataTypes);
  var Players = _Players(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var Standings = _Standings(sequelize, DataTypes);
  var Teams = _Teams(sequelize, DataTypes);

  Matches.belongsTo(Competitions, { as: "competition", foreignKey: "competitionId"});
  Competitions.hasMany(Matches, { as: "Matches", foreignKey: "competitionId"});
  Standings.belongsTo(Competitions, { as: "competition", foreignKey: "competitionId"});
  Competitions.hasMany(Standings, { as: "Standings", foreignKey: "competitionId"});
  Matches.belongsTo(Teams, { as: "homeTeam", foreignKey: "homeTeamId"});
  Teams.hasMany(Matches, { as: "Matches", foreignKey: "homeTeamId"});
  Matches.belongsTo(Teams, { as: "awayTeam", foreignKey: "awayTeamId"});
  Teams.hasMany(Matches, { as: "awayTeam_Matches", foreignKey: "awayTeamId"});
  Players.belongsTo(Teams, { as: "Team", foreignKey: "TeamId"});
  Teams.hasMany(Players, { as: "Players", foreignKey: "TeamId"});
  Standings.belongsTo(Teams, { as: "team", foreignKey: "teamId"});
  Teams.hasMany(Standings, { as: "Standings", foreignKey: "teamId"});

  return {
    Competitions,
    Matches,
    Players,
    SequelizeMeta,
    Standings,
    Teams,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
