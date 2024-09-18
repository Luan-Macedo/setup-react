import { useSelector } from 'react-redux'
import CabecalhoContato from '../../components/CabecalhoContato'
import Dados from '../../components/Dados'
import Eventos from '../../components/Eventos'
import { RootReducer } from '../../store'

const BarraContato = () => {
  const contatoSelecionado = useSelector(
    (state: RootReducer) => state.contatos.contatoSelecionado
  )

  if (!contatoSelecionado) {
    return <div>Selecione um contato</div>
  }

  return (
    <div>
      <CabecalhoContato />
      <Dados />
      <Eventos />
    </div>
  )
}

export default BarraContato
