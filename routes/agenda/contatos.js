const db = require('../../db/dbAgenda');

const contatos = (app) =>{
    app.route('/contatos/:id_user')
        .get(async(req, res)=>{
            const {id_user} = req.params;
            const {id_agenda} = req.query

            let id;
            let metodoSelect;

            if(!id_agenda){
                metodoSelect = "getContatosById_user";
                id = {id_user: id_user};
            } else {
                metodoSelect = "getContatosById_agenda";
                id = {id_agenda: id_agenda};
            }
            
            const contatos = await db[metodoSelect](id)
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