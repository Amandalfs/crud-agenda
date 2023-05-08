import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { ILoginUserRequestDTO } from "./ILoginUserRequestDTO";

export class LoginUserService {
    constructor(private UsersRepository: IUsersRepository){}

    async execute(data: ILoginUserRequestDTO){
        
        const user = await this.UsersRepository.findUserByEmail(data.email);

        if(!user){
            throw new Error("Nao existe uma conta, aproveite e se cadastre no nosso site");
        }

        if(data.senha!==user.senha){
            throw new Error("Senha invalida");
        }

        return user.id_user
    }
}