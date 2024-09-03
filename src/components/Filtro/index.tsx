import * as S from './styles'

export type Props = {
  ativo?: boolean
  tipo: string
}

const Filtros = ({ ativo, tipo }: Props) => (
  <S.Card ativo={ativo}>
    <S.Label>{tipo}</S.Label>
  </S.Card>
)

export default Filtros
