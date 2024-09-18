import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { cadastrar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'

import * as enums from '../../utils/enums/contato'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [tag, setTag] = useState(enums.Tag.TODOS)
  const [endereco, setEndereco] = useState('')
  const [aniversario, setAniversario] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        numero,
        email,
        tag,
        endereco,
        aniversario
      })
    )
    navigate('/')
  }

  return (
    <S.DivForm>
      <S.Formulario onSubmit={cadastrarContato}>
        {/* <S.BotaoVoltar onClick={() => navigate('/')}>
          <img src={IconeVoltar} />
        </S.BotaoVoltar> */}
        <S.Titulo>Novo contato</S.Titulo>
        <S.Inputs>
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
            value={endereco}
            onChange={(evento) => setEndereco(evento.target.value)}
            type="text"
            placeholder="Endereço"
          />
          <S.Campos
            value={aniversario}
            onChange={(evento) => setAniversario(evento.target.value)}
            type="date"
            placeholder="Data de Aniversário"
          />
        </S.Inputs>
        <S.Opcoes>
          <p>Tag</p>
          {Object.values(enums.Tag).map((tag) => (
            <div key={tag}>
              <input
                onChange={(evento) => setTag(evento.target.value as enums.Tag)}
                value={tag}
                name="tag"
                type="radio"
                id={tag}
              />{' '}
              <label htmlFor={tag}>{tag}</label>
            </div>
          ))}
        </S.Opcoes>
        <S.BotaoCadastrar type="submit">Cadastrar</S.BotaoCadastrar>
      </S.Formulario>
    </S.DivForm>
  )
}

export default Formulario
