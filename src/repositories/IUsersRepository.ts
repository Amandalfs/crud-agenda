import { User } from "../interface/IDadosUser"
import { ICreateUserRequestDTO } from "../services/users/create/ICreateUserDTO"

export interface IUsersRepository{
    createUser(data: ICreateUserRequestDTO): Promise<void>
    findUserByEmail(email:String): Promise<User>
}