// const dbAgenda = require("../db/dbAgenda");
import { ContactsRepository } from "../repositories/ContactsRepository";
import { CreateContactService } from "../services/contacts/create/CreateContactService";
import { UpdateContactService } from "../services/contacts/update/UpdateContactService";
import { ReadContactService  } from "../services/contacts/read/ReadContactsService";

import { Request, Response } from "express"; 
import { DeleteContactService } from "../services/contacts/delete/DeleteContactService";

class ContatosController {
    async create(req: Request, res: Response){
        const {email, telefone, name, id_user} = req.body;

        try {

            const contactsRepository = new ContactsRepository;
            const createContactService = new CreateContactService(contactsRepository);
            await createContactService.execute({email, telefone, name, id_user})
    
            return res.status(201).json("criado com sucesso");
        
        } catch (error) {
            return res.status(400).json(`${error}`);
        }

    }

    async read(req:Request, res: Response){
        const { id_user } = req.body;

        try {
            const contactsRepository = new ContactsRepository;
            const readContactService = new ReadContactService(contactsRepository);
            const contatos =  await readContactService.execute({id_user})
    
            return res.status(200).json({contatos:contatos});
            
        } catch (error) {
            console.log(error)
            return res.status(404).json("Sem resultados");
            
        }
        
    }

    async update(req: Request, res: Response){
        const {email, telefone, name, id_agenda} = req.body;

        try {

            const contactsRepository = new ContactsRepository;
            const updateContactService = new UpdateContactService(contactsRepository);
            const contatoNovo = await updateContactService.execute({id_agenda, name, email, telefone});

            return res.status(201).json({contatoNovo});

        } catch (error) {
            return res.status(400).json(error);
        } 
    }

    async delete(req: Request, res: Response){
        const {id_agenda} = req.body;

        try {
            const contactsRepository = new ContactsRepository;
            const deleteContactService = new DeleteContactService(contactsRepository);
            await deleteContactService.execute({id_agenda})

            return res.status(200).json("Contato Deletado com sucesso");
        } catch (error) {
            console.log(error)
            return res.status(400).json({error:error.message});
        }
        
    }
}

module.exports = ContatosController;