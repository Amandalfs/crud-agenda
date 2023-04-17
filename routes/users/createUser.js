const db = require('../../db/dbUsers');

const createUser = async (app) => {
  app.route('/users/create')
    .post(async(req, res)=>{
      const {name, email} = await req.body;
      const {senha} = await req.headers;
      let users = await db.getAllUsers()
      users.map((user)=>{
        if(user.email===email){
          return res.send("A conta com esse email ja existe");
        }
      })
      users = db.createUser({ name: name, email: email, senha: senha })
        .then(() => db.getAllUsers())
        .then(users => {return users})
      res.send({"msg":"conta criada com sucesso",users});
    })
}

module.exports = createUser;