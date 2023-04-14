const db = require('../../db/dbAgenda');

const adicionar = (app) =>{
    app.route('/contatos/adicionar')
        .post(async(req, res)=>{
            const {email, telefone, name, id_user} = req.body;
            
            const contatos = await db.createContato({ name: name, email: email, telefone: telefone, id_user: id_user })
            .then(() => db.getContatos({id_user: id_user}))
            .then(contatos => {return contatos})
            .catch((erro)=>{console.log(erro)})
            res.send({"contatos":contatos});
        })
}

module.exports = adicionar;