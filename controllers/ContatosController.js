const dbAgenda = require("../db/dbAgenda");

class ContatosController{
    async create(req, res){
        const {email, telefone, name, id_user} = req.body;
            
        const contatos = await dbAgenda.createContato({ name, email, telefone, id_user })
        .then(() => dbAgenda.getContatosById_user({id_user: id_user}))
            .then(contatos => {return contatos})
                .catch((erro)=>{console.log(erro)})

        return res.send({"contatos":contatos});
    }

    async read(req, res){
        const {id_user} = req.params;
        const {id_agenda} = req.query;

        let id;
        let metodoSelect;

        if(!id_agenda){
            metodoSelect = "getContatosById_user";
            id = {id_user: id_user};
        } else {
            metodoSelect = "getContatosById_agenda";
            id = {id_agenda: id_agenda};
        }
        
        const contatos = await dbAgenda[metodoSelect](id)
        .then(contatos => {
            console.log("conseguido acessar os contatos")
            return contatos;
        })
        .catch((erro)=>{
           return console.log("Erro na hora de acessar os contatos" + erro)
        })

        return res.send({"contatos":contatos});
    }

    async update(req, res){
        const {email, telefone, name} = req.body;
        const {id_user, id_agenda} = req.params;

        try {
            const contato = await dbAgenda.getContatosById_agenda({id_agenda});

            console.log(contato[0])
            const dados = {
                name: name ?? contato[0].name,
                email: email ?? contato[0].email,
                telefone: telefone ?? contato[0].telefone,

            } 

            const contatos = await dbAgenda.updateContato({id_agenda: id_agenda},(dados))
                .then(() => dbAgenda.getContatosById_user({id_user: id_user}))
                    .then(contatos => {return contatos})

            return res.send({"contatos":contatos});
        } catch (error) {
            console.log(error)
        } 
    }

    async delete(req, res){
        const {id_user, id_agenda} = req.params;

        try {
            const contatos = await dbAgenda.deleteContato({id_agenda})
                .then(() => dbAgenda.getContatosById_user({id_user}))
                .then(contatos => {return contatos})

            res.send({"contatos":contatos});
        } catch (error) {
            console.log(error)
        }
        
    }
}

module.exports = ContatosController;