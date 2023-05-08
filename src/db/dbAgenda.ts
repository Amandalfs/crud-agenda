import db from './knex';
import { DadosContato } from '../interface/IDadosContacts';

export const dbAgenda = {
  getContatos() {
    return db('agenda')
  },

  getContatosById_user(id_user:{id_user:number}) {
    return db('agenda').where(id_user).select()
  },

  getContatosById_agenda(id_agenda:{id_agenda:number}){
    return db('agenda').where(id_agenda).select()
  },

  createContato(contato:DadosContato) {
    return db('agenda').insert(contato)
  },

  updateContato(id_agenda:{id_agenda:number}, dadosContato:DadosContato) {
    return db('agenda').where(id_agenda).update(dadosContato)
  },

  deleteContato(id_agenda:{id_agenda:number}) {
    return db('agenda').where(id_agenda).del()
  }
}
