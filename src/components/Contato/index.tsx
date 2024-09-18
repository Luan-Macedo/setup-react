import { useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from 'react'

import Avatar from '../Avatar'

import * as S from './styles'

import { remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

import IconeOpcoes from '../../images/icons8-menu-30.png'

type Props = ContatoClass

const Contato = ({ nome, id, tag }: Props) => {
  const dispatch = useDispatch()
  const [opcoesVisiveis, setOpcoesVisiveis] = useState(false)
  const botaoRef = useRef<HTMLDivElement>(null)

  const exibeOpcoes = () => {
    setOpcoesVisiveis(!opcoesVisiveis)
  }

  const handleClickFora = (event: MouseEvent) => {
    if (botaoRef.current && !botaoRef.current.contains(event.target as Node)) {
      setOpcoesVisiveis(false)
    }
  }

  useEffect(() => {
    if (opcoesVisiveis) {
      document.addEventListener('mousedown', handleClickFora)
    } else {
      document.removeEventListener('mousedown', handleClickFora)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickFora)
    }
  }, [opcoesVisiveis])

  return (
    <S.Card>
      <S.Info>
        <Avatar nome={nome.toUpperCase()} />
        <div>
          <S.Nome>{nome}</S.Nome>
          <S.Tag>{tag}</S.Tag>
        </div>
      </S.Info>
      {opcoesVisiveis ? (
        <S.BotaoContainer ref={botaoRef}>
          <S.Botao onClick={() => dispatch(remover(id))}>Excluir</S.Botao>
        </S.BotaoContainer>
      ) : (
        <S.BotaoOptions onClick={exibeOpcoes}>
          <img src={IconeOpcoes} />
        </S.BotaoOptions>
      )}
    </S.Card>
  )
}

export default Contato
