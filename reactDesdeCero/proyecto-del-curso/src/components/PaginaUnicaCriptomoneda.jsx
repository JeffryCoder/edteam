import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PaginaUnicaCriptomoneda = () => {
  const API_URL = import.meta.env.VITE_API_URL
  const params = useParams()
  const [criptomonedas, setCriptomonedas] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets/${params.id}`)
      .then((data) => {
        setCriptomonedas(data.data.data)
        console.log(data.data.data)
      })
      .catch(() => {
        console.log('La petición falló')
      })
  }, [])

  if (!criptomonedas) {
    return (

      <>
        <div className='loaderContainer flex items-center justify-center w-full h-screen border border-gray-200 rounded-lg bg-gray-50'>
          {/* <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse">Cargando...</div> */}
          <span className='loader' />
        </div>
      </>

    )
  }
  return (
    <>
      <h1>Hola, soy la criptomoneda: {params.id}</h1>
    </>
  )
}
export default PaginaUnicaCriptomoneda
