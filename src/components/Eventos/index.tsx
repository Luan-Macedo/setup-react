import * as S from './styles'

const Eventos = () => (
  <S.Container>
    <S.Titulo>Eventos</S.Titulo>
    <S.Evento>
      <S.Data>
        <S.Mes>MAI</S.Mes>
        <S.Dia>29</S.Dia>
      </S.Data>
      <div>
        <span>Aniversário do Luan</span>
        <S.Horario>8:00 PM</S.Horario>
      </div>
    </S.Evento>
    <S.BotaoAdicionarEvento>Adicionar Evento +</S.BotaoAdicionarEvento>
  </S.Container>
)

export default Eventos
