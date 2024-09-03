import Filtros from '../../components/Filtro'
import { BotaoFiltro } from '../BarraDeFiltro/styles'
import * as S from './styles'

const BarraDeFiltro = () => (
  <div>
    <BotaoFiltro>=</BotaoFiltro>
    <S.Menu>
      <Filtros tipo="Contatos telefônicos" />
      <Filtros tipo="Contatos de e-mail" />
      <Filtros tipo="Empresa" ativo />
    </S.Menu>
  </div>
)

export default BarraDeFiltro
