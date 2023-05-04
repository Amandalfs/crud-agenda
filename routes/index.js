const { Router } = require('express');
const usersRoutes = require('./users.routes');
const agendaRoutes = require('./agenda.routes');

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/contatos", agendaRoutes);

module.exports = routes;