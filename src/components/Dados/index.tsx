import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useEffect, useState } from 'react'
import { salvar } from '../../store/reducers/contatos'

import * as S from './styles'

import IconeNumero from '../../images/icons8-phone-48.png'
import IconeEmail from '../../images/icons8-email-48.png'
import IconeLocalizacao from '../../images/icons8-location-48.png'
import IconeAniversario from '../../images/icons8-birthday-48.png'

const Dados = () => {
  const dispatch = useDispatch()
  const contatoSelecionado = useSelector(
    (state: RootReducer) => state.contatos.contatoSelecionado
  )

  const [editavel, setEditavel] = useState(false)
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [endereco, setEndereco] = useState('')
  const [aniversario, setAniversario] = useState('')

  useEffect(() => {
    if (contatoSelecionado) {
      setNumero(contatoSelecionado.numero)
      setEmail(contatoSelecionado.email)
      setEndereco(contatoSelecionado.endereco)
      setAniversario(contatoSelecionado.aniversario)
    }
  }, [contatoSelecionado])

  const alternarModoEdicao = () => {
    if (editavel) {
      if (contatoSelecionado) {
        dispatch(
          salvar({
            ...contatoSelecionado,
            numero,
            email,
            endereco,
            aniversario
          })
        )
      }
    }
    setEditavel(!editavel)
  }

  if (!contatoSelecionado) {
    return <p>Selecione um contato para ver os detalhes.</p>
  }

  return (
    <S.Container>
      <S.DivDados>
        <S.DivDado>
          <S.Icone src={IconeNumero} />
          <S.InputDados
            type="text"
            value={numero}
            disabled={!editavel}
            onChange={(evento) => setNumero(evento.target.value)}
          />
        </S.DivDado>
        <S.DivDado>
          <S.Icone src={IconeEmail} />
          <S.InputDados
            type="text"
            value={email}
            disabled={!editavel}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </S.DivDado>
        <S.DivDado>
          <S.Icone src={IconeLocalizacao} />
          <S.InputDados
            type="text"
            value={endereco}
            disabled={!editavel}
            onChange={(evento) => setEndereco(evento.target.value)}
          />
        </S.DivDado>
        <S.DivDado>
          <S.Icone src={IconeAniversario} />
          <S.InputDados
            type="text"
            value={aniversario}
            disabled={!editavel}
            onChange={(evento) => setAniversario(evento.target.value)}
          />
        </S.DivDado>
      </S.DivDados>
      <S.BotaoEditar onClick={alternarModoEdicao}>
        {editavel ? 'Salvar Contato' : 'Editar Contato'}
      </S.BotaoEditar>
    </S.Container>
  )
}

export default Dados
