import TarjetaMiembro from './TarjetaMiembro'

function ListadoMiembros () {
  return (
    <div className='main-content'>
      <h1>Listado de Miembros</h1>
      <TarjetaMiembro nombre='Wilber Galvez' descripcion='Miembro desde 2021' imagen='./images/letra-b.png' />
      <TarjetaMiembro nombre='Vladimir Nunez' descripcion='Miembro desde 2015' imagen='./images/letra-c.png' />
      <TarjetaMiembro nombre='Jeffry Sanchez' descripcion='Miembro desde 2023' imagen='./images/carta-a.png' />
      <TarjetaMiembro nombre='Esmarlyn Rodriguez' descripcion='Miembro desde 2023' imagen='./images/letra-d.png' />
      <TarjetaMiembro />
    </div>
  )
}
export default ListadoMiembros
