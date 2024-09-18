import { RootReducer } from '../../store'
import * as S from './styles'

import IconeContatoBranco from '../../images/icons8-avatar-64-white.png'
import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/contato'

export type Props = {
  ativo?: boolean
  tag: enums.Tag
}

const Filtros = ({ tag }: Props) => {
  const dispatch = useDispatch()
  const { filtro } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmaTag = filtro.tag === tag

    return mesmaTag
  }

  const filtrar = () => {
    dispatch(alterarFiltro(tag))
  }

  const ativo = verificaEstaAtivo()

  return (
    <S.Option ativo={ativo} onClick={filtrar}>
      <S.Icone src={IconeContatoBranco} />
      <S.Label>{tag}</S.Label>
    </S.Option>
  )
}

export default Filtros
