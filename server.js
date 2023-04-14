const exp = require('constants');
const express = require('express');
const port = 8020;
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.send("Bem vindo ao crud da agenda")
})

app.listen(port,()=> {
    console.log("Servidor ativo.")
})