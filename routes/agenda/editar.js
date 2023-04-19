const db = require('../../db/dbAgenda');

const editar = (app) =>{
    app.route('/contatos/editar/:id_user')
        .put(async(req, res)=>{
            const {email, telefone, name, id_agenda} = req.body;
            const {id_user} = req.params

            try {
                const contatos = await db.updateContato({id_agenda: id_agenda},({ name: name, email: email, telefone: telefone}))
                    .then(() => db.getContatosById_user({id_user: id_user}))
                    .then(contatos => {return contatos})

                res.send({"contatos":contatos});
            } catch (error) {

                console.log(error)
            }
            
        })
}



module.exports = editar;