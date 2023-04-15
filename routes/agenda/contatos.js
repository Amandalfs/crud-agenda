const db = require('../../db/dbAgenda');

const contatos = (app) =>{
    app.route('/contatos/:id_user')
        .get(async(req, res)=>{
            const {id_user} = req.params;
            
            const contatos = await db.getContatosById_user({id_user: id_user})
            .then(contatos => {
                console.log("conseguido acessar os contatos")
                return contatos;
            })
            .catch((erro)=>{
               return console.log("Erro na hora de acessar os contatos" + erro)
            })
            res.send({"contatos":contatos});
        })
}

module.exports = contatos;