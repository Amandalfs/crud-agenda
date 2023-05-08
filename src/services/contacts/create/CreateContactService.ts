import { IContactsRepository } from "../../../repositories/IContactsRepository"
import { ICreateContactRequestDTO } from "./ICreateContactRequestDTO"

export class CreateContactService{
    constructor(private ContactsRepository: IContactsRepository){}

    async execute(data: ICreateContactRequestDTO){
        return await this.ContactsRepository.createContact(data);
    }

}