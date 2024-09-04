import { useState } from 'react'
import Avatar from '../Avatar'
import * as S from './styles'

type Props = {
  nome: string
  numero: number
  email?: string
  empresa?: string
}

const Contato = ({ nome, numero, email, empresa }: Props) => {
  const [estaExibindo, setEstaExibindo] = useState(false)
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Info onClick={() => setEstaExibindo(!estaExibindo)}>
        <Avatar />
        <S.Nome>{nome}</S.Nome>
      </S.Info>
      {estaExibindo ? (
        <>
          <S.Dados>
            <S.Campos>{numero}</S.Campos>
            <S.Campos>{email}</S.Campos>
            <S.Campos>{empresa}</S.Campos>
          </S.Dados>
          <S.Botao>#</S.Botao>
        </>
      ) : (
        <></>
      )}
    </S.Card>
  )
}

export default Contato
