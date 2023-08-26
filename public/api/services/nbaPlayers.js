const request = require('../backend/request').request;
const helper = require('./helper');


async function getPlayerName(){
    const rows = await request({
        endpoint: '/nbaPlayers/getAllPlayerNames',
        method: 'GET'
    });
    const data = helper.emptyOrRows(rows);

    return data;
}

async function createPlayer(player){
    const result = await request({
        endpoint: '/nbaPlayers/createPlayer',
        method: 'POST',
        data: player
    });

    if (result.affectedRows){
        return "Player created successfully";
    }

    return "Error in creating player";
}

module.exports = {
    getPlayerName,
    createPlayer
}