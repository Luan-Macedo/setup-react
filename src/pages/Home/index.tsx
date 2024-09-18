import BarraContato from '../../containers/BarraContato'
import BarraDePesquisa from '../../containers/BarraDePesquisa'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <BarraDePesquisa mostrarFiltros />
    <ListaDeContatos />
    <BarraContato />
  </>
)

export default Home
