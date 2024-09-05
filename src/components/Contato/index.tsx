import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import Avatar from '../Avatar'

import * as S from './styles'

import { remover, salvar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome,
  numero: numeroOriginal,
  email: emailOriginal,
  empresa: empresaOriginal,
  id
}: Props) => {
  const [estaExibindo, setEstaExibindo] = useState(false)
  const [estaEditando, setEstaEditando] = useState(false)
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [empresa, setEmpresa] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (numeroOriginal.length > 0) {
      setNumero(numeroOriginal)
    }

    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }

    if (empresaOriginal.length > 0) {
      setEmpresa(empresaOriginal)
    }
  }, [numeroOriginal, emailOriginal, empresaOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNumero(numeroOriginal)
    setEmail(emailOriginal)
    setEmpresa(empresaOriginal)
  }

  return (
    <S.Card>
      <S.Info onClick={() => setEstaExibindo(!estaExibindo)}>
        <Avatar nome={nome.toUpperCase()} />
        {estaEditando && <S.Editando>Editando: </S.Editando>}
        <S.Nome>{nome}</S.Nome>
      </S.Info>
      {estaExibindo ? (
        <>
          <S.Dados>
            <S.Dado>
              <S.Label>Numero:</S.Label>
              <S.Campos
                id="phone"
                placeholder="(00) 00000-0000"
                disabled={!estaEditando}
                value={numero}
                onChange={(evento) => setNumero(evento.target.value)}
              />
            </S.Dado>
            <S.Dado>
              <S.Label>Email:</S.Label>
              <S.Campos
                disabled={!estaEditando}
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
              />
            </S.Dado>
            <S.Dado>
              <S.Label>Empresa:</S.Label>
              <S.Campos
                disabled={!estaEditando}
                value={empresa}
                onChange={(evento) => setEmpresa(evento.target.value)}
              />
            </S.Dado>
          </S.Dados>
          <S.BotaoContainer>
            {estaEditando ? (
              <>
                <S.Botao
                  onClick={() => {
                    dispatch(
                      salvar({
                        nome,
                        numero,
                        email,
                        empresa,
                        id
                      })
                    )
                    setEstaEditando(false)
                  }}
                >
                  Salvar
                </S.Botao>
                <S.Botao onClick={cancelarEdicao}>Cancelar</S.Botao>
              </>
            ) : (
              <>
                <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
                <S.Botao onClick={() => dispatch(remover(id))}>Excluir</S.Botao>
              </>
            )}
          </S.BotaoContainer>
        </>
      ) : (
        <></>
      )}
    </S.Card>
  )
}

export default Contato
