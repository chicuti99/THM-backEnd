import standings from "./Standings.js";
import Teams from "./Teams.js";
import Matches from "./Matches.js";
import player from "./Player.js";
const leagues = [
    {
        name:'BSA',
        id:2013
    },
    {
        name:'BL1',
        id:2002
    },
    {
        name:'PL',
        id:2021
    },
    {
        name:'SA',
        id:2019
    },
    {
        name:'PD',
        id: 2014
    }
]
async function Scheduler(){
    //leagues.map((league)=> standings(league.name));
    //leagues.map((league)=> Teams(league.id));
    //leagues.map((league)=> Matches(league.id))
    leagues.map((league)=>player(league.name))
}

Scheduler();