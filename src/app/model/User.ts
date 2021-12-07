import { Postagem } from "./Postagem"

export class User {
    public id: number
    public nome: string
    public foto: string
    public usuario: string //email
    public senha: string
    public token: string
    public tipo: string
    public postagem: Postagem[]
}