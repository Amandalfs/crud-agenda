const dbUsers = require('../db/dbUsers');
const db = require('../db/knex')

class UsersController {
    async create(req, res){
        const {name, email} = await req.body;
        const {senha} = await req.headers;

        let user = await db('users').select().where({email}).first();

        if(user){
            return res.status(401).send("A conta com esse email ja existe");
        }

        user = await dbUsers.createUser({ name, email, senha})
          .then(() => db('users').select().where({email}))
            .then(users => {return users})

        res.status(201).send({"msg":"conta criada com sucesso","id_user":user.id_user});

    }

    async login(req, res){
        const { email } = req.body;
        const { senha } = req.headers
        const user = await db("users").where({email}).first();

        if(!user){
            return res.status(401).send({"msg":"Nao existe uma conta, aproveite e se cadastre no nosso site"});
        }

        if(senha!==user.senha){
            return res.status(401).send({"msg":"Senha invalida"});
        }

        return res.status(200).send({"id_user":user.id_user})
    }
}

module.exports = UsersController;