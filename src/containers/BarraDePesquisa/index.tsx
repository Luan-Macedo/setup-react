import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import Filtros from '../../components/Filtros'
import BotaoAdicionar from '../../components/BotaoAdicionar'

const BarraDePesquisa = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Header>
      <S.Input
        type="text"
        placeholder="Pesquisar contatos"
        value={termo}
        onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
      />
      <S.DivFiltros>
        <Filtros />
        <Filtros />
        <Filtros />
        <Filtros ativo />
      </S.DivFiltros>
      <BotaoAdicionar />
    </S.Header>
  )
}

export default BarraDePesquisa
