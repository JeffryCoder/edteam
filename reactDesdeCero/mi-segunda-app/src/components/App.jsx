import Header from './Header.jsx'
import ListadoMiembros from './ListadoMiembros.jsx'
import Calculator from './calculadora/Calculator.jsx'

function App () {
  return (
    <>
      <Header />
      <Calculator />
      <main>
        <ListadoMiembros />
      </main>
    </>
  )
}
export default App
