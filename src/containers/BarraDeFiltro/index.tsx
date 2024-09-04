import { useState } from 'react'
import Filtros from '../../components/Filtro'
import { BotaoFiltro } from '../BarraDeFiltro/styles'
import * as S from './styles'

const BarraDeFiltro = () => {
  const [estaAberto, setEstaAberto] = useState(false)

  return (
    <div>
      <BotaoFiltro onClick={() => setEstaAberto(!estaAberto)}>=</BotaoFiltro>
      <S.Menu>
        {estaAberto ? (
          <>
            <Filtros tipo="Contatos telefônicos" />
            <Filtros tipo="Contatos de e-mail" />
            <Filtros tipo="Empresa" ativo />
          </>
        ) : (
          <></>
        )}
      </S.Menu>
    </div>
  )
}

export default BarraDeFiltro
