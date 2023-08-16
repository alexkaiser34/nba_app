const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function getPlayerName(){
    const rows = await db.query('SELECT first_name, last_name from players');
    const data = helper.emptyOrRows(rows);

    return data;
}

module.exports = {
    getPlayerName
}