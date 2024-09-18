import { Tag } from '../utils/enums/contato'

class Contato {
  id: number
  nome: string
  numero: string
  email: string
  tag: Tag
  endereco: string
  aniversario: string

  constructor(
    id: number,
    nome: string,
    numero: string,
    email: string,
    tag: Tag,
    endereco: string,
    aniversario: string
  ) {
    this.id = id
    this.nome = nome
    this.numero = numero
    this.email = email
    this.tag = tag
    this.endereco = endereco
    this.aniversario = aniversario
  }
}

export default Contato
