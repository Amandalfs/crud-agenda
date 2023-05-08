import { IContactsRepository } from "../../../repositories/IContactsRepository"
import { IUpdateContactRequestDTO } from "./IUpdateContactRequestDTO";

export class UpdateContactService{
    constructor(private ContactsRepository: IContactsRepository){}

    async execute(data: IUpdateContactRequestDTO){
        try {
            let contato = await this.ContactsRepository.contactFindByIdAgenda(data.id_agenda);
            
            const dados:IUpdateContactRequestDTO = {
                name: data.name ?? contato.name,
                email: data.email ?? contato.email,
                telefone: data.telefone ?? contato.telefone,
            } 

            await this.ContactsRepository.contactUpdateByIdAgenda(data.id_agenda, dados);
            return contato = await this.ContactsRepository.contactFindByIdAgenda(data.id_agenda);
        } catch (error) {
            console.log(error)
        }
           
    }

}