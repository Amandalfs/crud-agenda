import { Contacts } from "../interface/IDadosContacts";
import { ICreateContactRequestDTO } from "../services/contacts/create/ICreateContactRequestDTO";
import { IUpdateContactRequestDTO } from "../services/contacts/update/IUpdateContactRequestDTO";
import { IReadContactsRequestDTO } from "../services/contacts/read/IReadContactsRequestDTO";

export interface IContactsRepository{
    createContact(data: ICreateContactRequestDTO): Promise<void>

    contactsFindByIdUser(data:IReadContactsRequestDTO): Promise<Contacts[]>

    contactFindByIdAgenda(id_agenda:number): Promise<Contacts>

    contactUpdateByIdAgenda(id_agenda:number, data: IUpdateContactRequestDTO): Promise<void>

    contactDeleteByIdAgenda(id_agenda:number): Promise<void>
}