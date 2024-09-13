import * as S from './styles'

import IconeAvatar from '../../images/icons8-avatar-64-white.png'

const CabecalhoContato = () => (
  <S.ContainerContato>
    <S.Avatar src={IconeAvatar} />
    <S.ContainerInfos>
      <S.Nome>Nome</S.Nome>
      <S.Tag>Família</S.Tag>
      <S.BotaoAdicionarTag>+</S.BotaoAdicionarTag>
    </S.ContainerInfos>
  </S.ContainerContato>
)

export default CabecalhoContato
