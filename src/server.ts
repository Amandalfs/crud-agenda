// require('express-async-errors')
import express from "express";
import { Request, Response } from "express";

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

import cors from "cors";
import  routes  from "./routes/index";

const port:number = 8020;

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (req: Request, res: Response)=>{
    res.send("Bem vindo ao crud da agenda")
})

app.listen(port,()=> {
    console.log("Servidor ativo.")
})