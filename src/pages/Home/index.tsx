import BarraContato from '../../containers/BarraContato'
import BarraDePesquisa from '../../containers/BarraDePesquisa'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <BarraDePesquisa />
    <ListaDeContatos contador={0} />
    <BarraContato />
  </>
)

export default Home
