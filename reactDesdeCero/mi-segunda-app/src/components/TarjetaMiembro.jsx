function TarjetaMiembro ({ nombre = 'Nombre por defecto', descripcion = 'Descripcion por defecto', imagen = 'Imagen por defecto' }) {
  return (
    <div className='tarjetaMiembro'>
      <hr />
      <img src={imagen} alt='Imagen de miembro voluntario' width={200} />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
    </div>
  )
}
export default TarjetaMiembro
