export interface ICreateContactRequestDTO{
    name:string,
    email:string,
    telefone:string,
    id_user:  number,
    id_agenda?: number
}