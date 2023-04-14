const db = require('../../db/dbAgenda');

const deleta = (app) =>{
    app.route('/contatos/deleta')
        .delete(async(req, res)=>{
            const {id_agenda, id_user} = req.body;
            
            const contatos = await db.deleteContato({id_agenda: id_agenda})
            .then(() => db.getContatosById_user({id_user: id_user}))
                .then(contatos => {return contatos})
                    .catch((erro)=>{console.log("erro na hora de deleta contato"+erro)})

            res.send({"contatos":contatos});
        })
}

module.exports = deleta;