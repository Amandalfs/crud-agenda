const exp = require('constants');
const express = require('express');
const port = 8020;
const cors = require('cors');

const createUser = require('./routes/users/createUser');
const login = require('./routes/users/loginUser');

const adicionar = require('./routes/agenda/adicionar');
const deleta = require('./routes/agenda/deleta');

const app = express();

app.use(cors());
app.use(express.json());

//routes user
createUser(app);
login(app);

//routes contatos
adicionar(app);
deleta(app)

app.get('/', (req,res)=>{
    res.send("Bem vindo ao crud da agenda")
})

app.listen(port,()=> {
    console.log("Servidor ativo.")
})