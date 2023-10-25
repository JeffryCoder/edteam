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
          {/* <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse">Cargando...</div> */}
          <span className='loader' />
        </div>
      </>

    )
  }
  return (
    <>
      <h1>{criptomonedaBuscada.name}</h1>
      <p>Id: {criptomonedaBuscada.id}</p>
      <p>Symbol: {criptomonedaBuscada.symbol}</p>
      <p>Ranking: {criptomonedaBuscada.rank}</p>
      <p>Supply: {criptomonedaBuscada.supply}</p>
      <p>Max Supply: {criptomonedaBuscada.maxSupply}</p>
      <p>Market Cap: {criptomonedaBuscada.marketCapUsd}</p>
      <p>Volumen: {criptomonedaBuscada.volumeUsd24Hr}</p>
      <p>Precio: {criptomonedaBuscada.priceUsd}</p>
      <p>Fluctuacion en las ultimas 24 horas: {criptomonedaBuscada.changePercent24Hr}%</p>

    </>
  )
}
export default PaginaUnicaCriptomoneda
