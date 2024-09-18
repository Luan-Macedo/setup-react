import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import Filtros from '../../components/Filtros'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import * as enums from '../../utils/enums/contato'

const BarraDePesquisa = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Header>
      <S.Pesquisa
        type="text"
        placeholder="Pesquisar contatos"
        value={termo}
        onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
      />
      <S.DivFiltros>
        <Filtros tag={enums.Tag.TODOS} />
        <Filtros tag={enums.Tag.FAMILIA} />
        <Filtros tag={enums.Tag.AMIGOS} />
        <Filtros tag={enums.Tag.TRABALHO} />
      </S.DivFiltros>
      <BotaoAdicionar />
    </S.Header>
  )
}

export default BarraDePesquisa
