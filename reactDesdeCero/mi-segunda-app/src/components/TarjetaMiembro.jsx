import { useRef } from 'react'
import '../styles/style.css'
function TarjetaMiembro ({ nombre = 'Nombre por defecto', descripcion = 'Descripcion por defecto', imagen = 'Imagen por defecto' }) {
  const miReferencia = useRef()
  return (
    <div className='tarjetaMiembro'>
      <hr />
      <img ref={miReferencia} src={imagen} alt='Imagen de miembro voluntario' width={200} />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <button onClick={() => { miReferencia.current.classList.remove('desactivada') }}>Activar</button>
      <button onClick={() => { miReferencia.current.classList.add('desactivada') }}>Desactivar</button>
    </div>
  )
}
export default TarjetaMiembro
