import { IContactsRepository } from "../../../repositories/IContactsRepository";

export class DeleteContactService{
    constructor(private ContactsRepository: IContactsRepository){}

    async execute(data: {id_agenda:number}){
        const contact = await this.ContactsRepository.contactFindByIdAgenda(data.id_agenda);

        if(!contact){
            throw new Error("Impossivel deletar um contato que nao existe");
        }

        await this.ContactsRepository.contactDeleteByIdAgenda(data.id_agenda);
    }
}