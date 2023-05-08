import db from "../db/knex";
import { User } from "../interface/IDadosUser";
import { IUsersRepository } from "./IUsersRepository";

export class UserRepository implements IUsersRepository {
    async findUserByEmail(email:string){
        let user = await db('users').select().where({email}).first();
        return user;
    }

    async createUser(data: User){        
        await db('users').insert(data);
    }

}

