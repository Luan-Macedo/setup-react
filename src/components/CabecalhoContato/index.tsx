import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './styles'

import IconeAvatar from '../../images/icons8-avatar-64-white.png'

const CabecalhoContato = () => {
  const contatoSelecionado = useSelector(
    (state: RootReducer) => state.contatos.contatoSelecionado
  )

  if (!contatoSelecionado) {
    return <div>Selecione um contato para ver os detalhes</div>
  }

  return (
    <S.ContainerContato>
      <S.Avatar src={IconeAvatar} />
      <S.ContainerInfos>
        <S.Nome>{contatoSelecionado.nome}</S.Nome>
        <S.Tag>{contatoSelecionado.tag}</S.Tag>
        <S.BotaoAdicionarTag>+</S.BotaoAdicionarTag>
      </S.ContainerInfos>
    </S.ContainerContato>
  )
}

export default CabecalhoContato
