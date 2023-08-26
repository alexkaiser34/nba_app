const request = require('../backend/request').request;
const helper = require('./helper');


async function getPlayerName(){
    const rows = await request(
        {"query": 'SELECT first_name, last_name from players'},
        {
            endpoint: '/query',
            method: 'POST'
        }
    );
    const data = helper.emptyOrRows(rows);

    return data;
}

async function createPlayer(player){
    const result = await request(
        {"query": `INSERT INTO players
        (first_name, last_name, id)
        VALUES
        ('${player.first_name}','${player.last_name}', ${player.id})`},
        {
            endpoint: '/query',
            method: 'POST'
        }
    );
    if (result.affectedRows){
        return "Player created successfully";
    }

    return "Error in creating player";
}

module.exports = {
    getPlayerName,
    createPlayer
}