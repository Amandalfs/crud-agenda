const { Router } = require("express");
const usersRoutes = Router();

const UsersController = require('../controllers/UsersController');
const usersController = new UsersController;

usersRoutes.get('/', usersController.login);
usersRoutes.post('/', usersController.create);

module.exports = usersRoutes;