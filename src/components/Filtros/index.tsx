import * as S from './styles'

import IconeContatoPreto from '../../images/icons8-avatar-64.png'
import IconeContatoBranco from '../../images/icons8-avatar-64-white.png'

export type Props = {
  ativo?: boolean
}

const Filtros = (props: Props) => (
  <S.Option ativo={props.ativo}>
    <S.Icone src={props.ativo ? IconeContatoBranco : IconeContatoPreto} />
    <S.Label>Todos os contatos</S.Label>
  </S.Option>
)

export default Filtros
