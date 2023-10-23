import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>
        Hola, bienvenidos a la Criptoff
      </h1>
      <p>Conoce las 100 criptos mas famosas y su valor en el mercada de manera actualizada</p>
      <Link to='/criptomonedas'>Ver Criptomonedas</Link>
    </>
  )
}
export default Home
