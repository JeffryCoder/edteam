import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

function TarjetaCriptomoneda ({ id, nombreCriptomoneda = 'NombreCripto', precioCriptomoneda = 'PrecioCripto', precioUltimas24Horas }) {
  const refTarjetaCriptomoneda = useRef()

  useEffect(() => {
    // console.log("Se renderizó el componente TarjetaCriptomoneda")
    console.log(refTarjetaCriptomoneda)
    console.log(precioUltimas24Horas)
    if (precioUltimas24Horas > 0) {
      refTarjetaCriptomoneda.current.classList.add('bg-green-500')
    } else if (precioUltimas24Horas < 0) {
      refTarjetaCriptomoneda.current.classList.add('bg-red-500')
    } else {
      refTarjetaCriptomoneda.current.classList.add('bg-yellow-500')
    }
  }, [])

  return (

    <>
      <div className='car' id={id}>
        <Link to={`/criptomonedas/${id}`}>
          <span ref={refTarjetaCriptomoneda} href='#' className='block max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{nombreCriptomoneda}</h5>
            <p className='font-bold'>USD${parseFloat(precioCriptomoneda).toFixed(2)}</p>
            <p className='font-bold'>Fluctuacion en las ultimas 24 horas: {(parseFloat(precioUltimas24Horas).toFixed(2))}%</p>
          </span>
        </Link>
      </div>
    </>
  )
}
export default TarjetaCriptomoneda
