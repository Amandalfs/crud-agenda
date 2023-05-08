import { Router } from "express";
import  usersRoutes  from './users.routes';
import  agendaRoutes  from './agenda.routes';

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/contacts", agendaRoutes);

export default routes;