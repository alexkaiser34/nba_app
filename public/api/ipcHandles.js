const { ipcMain } = require('electron');
const services = require('./services/nbaPlayers');


ipcMain.handle('get:player', async(_,args) => {
    const res = await services.getPlayerName();
    return res;
});

ipcMain.handle('post:player', async(_,args) => {
  if (args){
    try {
      const res = await services.createPlayer(JSON.parse(args));
      return res;
    } catch(err){
      console.log(err);
      return;
    }

  }

  return null;
});

