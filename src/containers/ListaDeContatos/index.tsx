import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import { Container } from './styles'

export type Props = {
  contador: number
}

const ListaDeContatos = (props: Props) => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  const contatosOrdenadosEFiltrados = filtraContatos().sort((a, b) => {
    return a.nome.localeCompare(b.nome)
  })

  return (
    <Container>
      <ul>
        <span>{props.contador}</span>
        <h2>Contatos</h2>
        {contatosOrdenadosEFiltrados.map((c) => (
          <li key={c.id}>
            <Contato
              id={c.id}
              nome={c.nome}
              numero={c.numero}
              email={c.email}
              empresa={c.empresa}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeContatos
