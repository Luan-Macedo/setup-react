import CabecalhoContato from '../../components/CabecalhoContato'
import Dados from '../../components/Dados'
import Eventos from '../../components/Eventos'

import { DivContato } from './styles'

const BarraContato = () => (
  <DivContato>
    <CabecalhoContato />
    <Dados />
    <Eventos />
  </DivContato>
)

export default BarraContato
