const db = require('../../db/dbUsers');

const login = (app) =>{
    app.route('/users/login')
        .get(async(req, res)=>{
            let value = true;
            const {email, senha} = req.query;
            const users = await db.getAllUsers();
            users.forEach(user => {
                if(email===user.email && senha===user.senha){
                    value = false;
                    return res.send({"id_user":user.id_user})
                }                
            });
            if(value){
                return res.send({"msg":"Nao existe uma conta, aproveite e se cadastre no nosso site"})
            }
        })
}

module.exports = login;