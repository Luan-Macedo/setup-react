import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)

  return (
    <main>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              nome={c.nome}
              numero={c.numero}
              email={c.email}
              empresa={c.empresa}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default ListaDeContatos
