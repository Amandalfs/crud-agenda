import { IContactsRepository } from "../../../repositories/IContactsRepository"
import { IReadContactsRequestDTO } from "./IReadContactsRequestDTO";

export class ReadContactService{
    constructor(private ContactsRepository: IContactsRepository){}

    async execute(data: IReadContactsRequestDTO){
        return await this.ContactsRepository.contactsFindByIdUser(data);
    }
}