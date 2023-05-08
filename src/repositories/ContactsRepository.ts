import { IContactsRepository  } from "./IContactsRepository"
import { ICreateContactRequestDTO } from "../services/contacts/create/ICreateContactRequestDTO";
import { IReadContactsRequestDTO } from "../services/contacts/read/IReadContactsRequestDTO";

import db from "../db/knex";
import { IUpdateContactRequestDTO } from "../services/contacts/update/IUpdateContactRequestDTO";

export class ContactsRepository implements IContactsRepository {
    async createContact(data: ICreateContactRequestDTO){
        await db('agenda').insert(data);
    }

    async contactsFindByIdUser(data: IReadContactsRequestDTO){
        return await db('agenda').where(data);
    }

    async contactFindByIdAgenda(id_agenda:number){
        return await db('agenda').where({id_agenda:id_agenda}).first();
    }

    async contactUpdateByIdAgenda(id_agenda:number, data: IUpdateContactRequestDTO){
        await db('agenda').where("id_agenda", id_agenda).update(data)
    }

    async contactDeleteByIdAgenda(id_agenda:number){
        await db('agenda').where("id_agenda", id_agenda).del()
    }
}
