class Contato {
  nome: string
  numero: string
  email: string
  empresa: string
  id: number

  constructor(
    nome: string,
    numero: string,
    email: string,
    empresa: string,
    id: number
  ) {
    this.nome = nome
    this.numero = numero
    this.email = email
    this.empresa = empresa
    this.id = id
  }
}

export default Contato
