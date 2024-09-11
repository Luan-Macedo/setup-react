import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import { Container } from './styles'

const ListaDeContatos = () => {
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
