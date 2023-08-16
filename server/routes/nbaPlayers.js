const express = require('express');
const router = express.Router();
const nbaPlayers = require('../services/nbaPlayers');

router.get('/', async function (req, res, next){
    try {
        res.json(await nbaPlayers.getPlayerName());
    } catch (err) {
        console.log(`Error while getting nba player names`);
        next(err);
    }
});

module.exports = router;