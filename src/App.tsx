import BarraDeFiltro from './containers/BarraDeFiltro'
import BarraDePesquisa from './containers/BarraDePesquisa'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraDePesquisa />
        <BarraDeFiltro />
        <ListaDeContatos />
      </Container>
    </>
  )
}

export default App
