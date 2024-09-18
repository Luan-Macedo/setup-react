import { useDispatch, useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import { Contador, Container, Titulo } from './styles'
import { Tag } from '../../utils/enums/contato'
import { selecionarContato } from '../../store/reducers/contatos'

export type Props = {
  contador: number
}

const ListaDeContatos = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, tag } = useSelector((state: RootReducer) => state.filtro)

  const handleSelecionarContato = (id: number) => {
    dispatch(selecionarContato(id))
  }

  const filtraContatos = () => {
    let contatosFiltrados = itens

    if (termo) {
      contatosFiltrados = contatosFiltrados.filter((item) =>
        item.nome.toLowerCase().includes(termo.toLowerCase())
      )
    }

    if (tag && tag !== Tag.TODOS) {
      contatosFiltrados = contatosFiltrados.filter((item) => item.tag === tag)
    }

    return contatosFiltrados
  }

  const contatosOrdenadosEFiltrados = [...filtraContatos()].sort((a, b) => {
    return a.nome.localeCompare(b.nome)
  })

  const totalDeContatos = itens.length

  return (
    <Container>
      <ul>
        <Contador>{totalDeContatos} Total</Contador>
        <Titulo>Contatos</Titulo>
        {contatosOrdenadosEFiltrados.map((c) => (
          <li key={c.id} onClick={() => handleSelecionarContato(c.id)}>
            <Contato
              id={c.id}
              nome={c.nome}
              numero={c.numero}
              email={c.email}
              tag={c.tag}
              endereco={c.endereco}
              aniversario={c.aniversario}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
