const db = require('./db/dbUsers');

async function dados(){
   const date = await db.getAllUsers();
    console.log(date)
}

dados();
