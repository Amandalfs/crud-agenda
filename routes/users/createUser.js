const db = require('../../db/dbUsers');

const createUser = async (app) => {
  app.route('/users/create')
    .post(async(req, res)=>{
      const {name, email} = await req.body;
      const {senha} = await req.headers;
      let users = await db.getAllUsers()
      valueBoolean = false;
      users.map((user)=>{
        if(user.email===email){
          return valueBoolean = true;
        }
      })

      if(valueBoolean){
        return res.status(401).send("A conta com esse email ja existe");
      } else {
        users = await db.createUser({ name: name, email: email, senha: senha })
        .then(() => db.getAllUsers())
        .then(users => {return users})
        res.status(201).send({"msg":"conta criada com sucesso","id_user":users[users.length-1].id_user});
      }

      
    })
}

module.exports = createUser;