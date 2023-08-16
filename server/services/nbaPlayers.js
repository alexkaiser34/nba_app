const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function getPlayerName(){
    const rows = await db.query('SELECT first_name, last_name from players');
    const data = helper.emptyOrRows(rows);

    return data;
}

async function createPlayer(player){
    const result = await db.query(
        `INSERT INTO players
        (first_name, last_name, id)
        VALUES
        ('${player.first_name}','${player.last_name}', ${player.id})`
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