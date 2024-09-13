import * as S from './styles'

import IconeNumero from '../../images/icons8-phone-48.png'
import IconeEmail from '../../images/icons8-email-48.png'
import IconeLocalizacao from '../../images/icons8-location-48.png'
import IconeAniversario from '../../images/icons8-birthday-48.png'

const Dados = () => (
  <S.Container>
    <S.DivDados>
      <S.Icone src={IconeNumero} />
      <S.InputDados type="text" />
    </S.DivDados>
    <S.DivDados>
      <S.Icone src={IconeEmail} />
      <S.InputDados type="text" />
    </S.DivDados>
    <S.DivDados>
      <S.Icone src={IconeLocalizacao} />
      <S.InputDados type="text" />
    </S.DivDados>
    <S.DivDados>
      <S.Icone src={IconeAniversario} />
      <S.InputDados type="text" />
    </S.DivDados>
  </S.Container>
)

export default Dados
