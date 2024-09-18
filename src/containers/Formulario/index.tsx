import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { cadastrar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'

import IconeVoltar from '../../images/icons8-back-50.png'
import { Tag } from '../../utils/enums/contato'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [tag, setTag] = useState(Tag.TODOS)
  const [endereco, setEndereco] = useState('')
  const [aniversario, setAniversario] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        numero,
        email,
        empresa,
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
        <S.Campos
          as="select"
          value={tag}
          onChange={(e) => setTag(e.target.value as Tag)}
        >
          <option value={Tag.FAMILIA}>Família</option>
          <option value={Tag.AMIGOS}>Amigos</option>
          <option value={Tag.TRABALHO}>Trabalho</option>
        </S.Campos>
        <S.BotaoCadastrar type="submit">Cadastrar</S.BotaoCadastrar>
      </S.Formulario>
    </S.DivForm>
  )
}

export default Formulario
