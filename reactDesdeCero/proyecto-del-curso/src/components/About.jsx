import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const About = () => {
  const usuario = useContext(UserContext)
  return (

    <div>
      <h1>Acerca de nosotros</h1>
      <p>Bienvenido, {`${usuario.nombre}`}</p>
    </div>
  )
}

export default About
