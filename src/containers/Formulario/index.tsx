import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { cadastrar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'

import IconeVoltar from '../../images/icons8-back-50.png'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [empresa, setEmpresa] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        numero,
        email,
        empresa
      })
    )
    navigate('/')
  }

  return (
    <S.Container>
      <S.Formulario onSubmit={cadastrarContato}>
        <div>
          <S.BotaoVoltar onClick={() => navigate('/')}>
            <img src={IconeVoltar} />
          </S.BotaoVoltar>
          <S.Titulo>Criar contato</S.Titulo>
        </div>
        <S.Campos
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <S.Campos
          value={numero}
          onChange={(evento) => setNumero(evento.target.value)}
          type="text"
          placeholder="Número"
        />
        <S.Campos
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          placeholder="Email"
        />
        <S.Campos
          value={empresa}
          onChange={(evento) => setEmpresa(evento.target.value)}
          type="text"
          placeholder="Empresa"
        />
        <S.BotaoCadastrar type="submit">Cadastrar</S.BotaoCadastrar>
      </S.Formulario>
    </S.Container>
  )
}

export default Formulario
