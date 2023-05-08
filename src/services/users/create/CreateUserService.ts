import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./ICreateUserDTO";

export class CreateUserService {
    constructor(private UsersRepository: IUsersRepository){}

    async execute(data: ICreateUserRequestDTO): Promise<void> {

        let user = await this.UsersRepository.findUserByEmail(data.email);
        
        if(user){
            throw new Error("A conta com esse email ja existe");
        }
    
        await this.UsersRepository.createUser(data);
    }
}
