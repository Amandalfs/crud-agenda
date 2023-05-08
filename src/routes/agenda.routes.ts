import { Router } from "express";
const agendaRoutes = Router();

const ContatosController = require('../controllers/ContatosController');
const contatosController = new ContatosController;

agendaRoutes.get("/", contatosController.read);
agendaRoutes.post("/", contatosController.create);
agendaRoutes.put("/", contatosController.update);
agendaRoutes.delete('/', contatosController.delete);

export = agendaRoutes;

