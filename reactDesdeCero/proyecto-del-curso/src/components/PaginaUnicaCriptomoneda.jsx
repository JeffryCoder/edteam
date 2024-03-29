import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './PaginaUnicaCriptomoneda.css'
import dayjs from 'dayjs'
const PaginaUnicaCriptomoneda = () => {
  const API_URL = import.meta.env.VITE_API_URL
  const params = useParams()
  const [criptomonedaBuscada, setCriptomonedaBuscada] = useState()
  const [historialCriptomeda, setHistorialCriptomeda] = useState({})

  useEffect(() => {
    axios.get(`${API_URL}assets/${params.id}`)
      .then((data) => {
        setCriptomonedaBuscada(data.data.data)
        // console.log(data.data.data)
      })
      .catch(() => {
        console.log('La petición falló')
      })
  }, [API_URL, params.id])

  useEffect(() => {
    axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
      .then((data) => {
        setHistorialCriptomeda(data.data.data)
        console.log(data.data.data)
      })
      .catch(() => {
        console.log('La petición falló')
      })
  }, [API_URL, params.id])

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
      <div href='#' className='paginaCriptoContainer bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-10 mt-10 text-right pointer-events-none'>
        <span className='inline text-2xl text-white border p-2'>{criptomonedaBuscada.rank}</span>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-white text-center'>{criptomonedaBuscada.name}</h5>
        <div className='text-center text-blue-400'>
          <p>Ranking:  {criptomonedaBuscada.rank}</p>
          <p>Id: {criptomonedaBuscada.id}</p>
          <p>Symbol: {criptomonedaBuscada.symbol}</p>
          <p>Supply: USD$ {parseFloat(criptomonedaBuscada.supply).toFixed(2)}</p>
          <p>Max Supply: USD$ {parseFloat(criptomonedaBuscada.maxSupply).toFixed(2)}</p>
          <p>Market Cap: USD$ {criptomonedaBuscada.marketCapUsd}</p>
          <p>Volumen: USD$ {parseFloat(criptomonedaBuscada.volumeUsd24Hr).toFixed(2)}</p>
          <p>Precio: USD$ {parseFloat(criptomonedaBuscada.priceUsd).toFixed(2)}</p>
          <p>Fluctuacion ult. 24h: {parseFloat(criptomonedaBuscada.changePercent24Hr).toFixed(2)}%</p>
        </div>
      </div>
      <div>
        <h4 className='text-white'>Historial de precios por dia</h4>
        <table className='text-white table-auto'>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {
              historialCriptomeda.length > 0 && historialCriptomeda.map((historial) => {
                return (
                  <tr key={historial.time}>
                    <td>
                      {
                        dayjs(historial.date).format('DD/MM/YYYY')
                      }
                    </td>
                    <td>{parseFloat(historial.priceUsd).toFixed(2)}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
export default PaginaUnicaCriptomoneda
