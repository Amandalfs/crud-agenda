import { Request, Response } from 'express'
import { UserRepository } from '../repositories/UserRepository';
import { CreateUserService } from '../services/users/create/CreateUserService';
import { LoginUserService } from '../services/users/login/LoginUserService';

class UsersController {
    async create(req: Request, res: Response) {
        const {name, email, senha } = req.body;

        try {

            const userRepository =  new UserRepository;
            const createUserService = new CreateUserService(userRepository);
            await createUserService.execute({name, email, senha});
            res.status(201).send({"msg":"conta criada com sucesso"});
            
        } catch (err) {
            res.status(400).json({error: err.message});   
        }
        
    }

    async login(req: Request, res: Response){
        const { email, senha } = req.body;

        try {
            
            const userRepository =  new UserRepository;
            const loginUserService = new LoginUserService(userRepository);
            const id_user = await loginUserService.execute({email, senha});
            
            return res.status(201).json({id_user:id_user});
            
        } catch (err) {
            res.status(400).json({error: err.message}); 
        }
    }
}

module.exports = UsersController;