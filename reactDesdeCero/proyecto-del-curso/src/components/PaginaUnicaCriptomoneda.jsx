import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PaginaUnicaCriptomoneda = () => {
  const API_URL = import.meta.env.VITE_API_URL
  const params = useParams()
  const [criptomonedaBuscada, setCriptomonedaBuscada] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets/${params.id}`)
      .then((data) => {
        setCriptomonedaBuscada(data.data.data)
        console.log(data.data.data)
      })
      .catch(() => {
        console.log('La petición falló')
      })
  }, [])

  if (!criptomonedaBuscada) {
    return (

      <>
        <div className='loaderContainer flex items-center justify-center w-full h-screen border border-gray-200 rounded-lg bg-gray-50'>
          {/* <div className='px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse'>Cargando...</div> */}
          <span className='loader' />
        </div>
      </>

    )
  }
  return (
    <>
      <div href='#' className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-10'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center'>{criptomonedaBuscada.name}</h5>
        <p className='text-normal text-gray-800'>Id: {criptomonedaBuscada.id}</p>
        <p className='text-normal text-gray-800'>Symbol: {criptomonedaBuscada.symbol}</p>
        <p className='text-normal text-gray-800'>Ranking:  {criptomonedaBuscada.rank}</p>
        <p className='text-normal text-gray-800'>Supply: {criptomonedaBuscada.supply}</p>
        <p className='text-normal text-gray-800'>Max Supply: {criptomonedaBuscada.maxSupply}</p>
        <p className='text-normal text-gray-800'>Market Cap: {criptomonedaBuscada.marketCapUsd}</p>
        <p className='text-normal text-gray-800'>Volumen: {criptomonedaBuscada.volumeUsd24Hr}</p>
        <p className='text-normal text-gray-800'>Precio: {criptomonedaBuscada.priceUsd}</p>
        <p className='text-normal text-gray-800'>Fluctuacion en las ultimas 24 horas: {parseFloat(criptomonedaBuscada.changePercent24Hr).toFixed(2)}%</p>
      </div>
    </>
  )
}
export default PaginaUnicaCriptomoneda
