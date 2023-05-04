const { Router } = require("express");
const agendaRoutes = Router();

const ContatosController = require('../controllers/ContatosController');
const contatosController = new ContatosController;

agendaRoutes.get("/", contatosController.read);
agendaRoutes.post("/", contatosController.create);
agendaRoutes.put("/:id_user/:id_agenda", contatosController.update);
agendaRoutes.delete('/:id_user', contatosController.delete);

module.exports = agendaRoutes;

