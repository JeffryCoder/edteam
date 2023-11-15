// import { useContext } from 'react'
// import { UserContext } from '../context/UserContext'

import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Perfil = () => {
  const usuario = useContext(UserContext)

  // const usuario = {
  //   nombre: 'Miguelito',
  //   registeredAt: '28 de agosto'
  // }
  return (

    <div>
      <h1>Perfil de {usuario.nombre}</h1>
      <p>Bienvenido, {`${usuario.nombre} ${usuario.apellido}`}</p>
      <div>
        <p>Nombre completo: {`${usuario.nombre} ${usuario.apellido}`}</p>
        <p>Edad: {usuario.edad}</p>
        <p>Correo: {usuario.email}</p>
        <p>Usuario desde: {usuario.registeredAt}</p>
      </div>
    </div>
  )
}

export default Perfil
