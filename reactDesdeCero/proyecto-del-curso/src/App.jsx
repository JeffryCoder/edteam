import { useEffect, useState } from "react"
import TarjetaCriptomoneda from "./components/TarjetaCriptomoneda"
import './App.css'
import axios from "axios"

function App() {

  const API_URL = import.meta.env.VITE_API_URL
  const [criptomonedas, setCriptomonedas] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => { 
        setCriptomonedas(data.data.data) 
      })
      .catch(() => {
        console.log("La petición falló")
      })
  }, [])

  if (!criptomonedas) {
    return (
        
        <>
          <div className="loaderContainer flex items-center justify-center w-full h-screen border border-gray-200 rounded-lg bg-gray-50">
            <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse">Cargando...</div>
            <span className="loader"></span>
          </div>
        </>
        

      );
  }

  
  return (
    <div className="app-container">
      <h1 className="text-5xl text-center m-5">Precio de Criptomonedas Actualizado</h1>
      <div className="contenedorTarjetaCriptomoneda">
        {
          criptomonedas.map((criptomoneda) => {
            console.log(criptomoneda)
            return <TarjetaCriptomoneda key={criptomoneda.id} id={criptomoneda.id} nombreCriptomoneda={criptomoneda.name} precioCriptomoneda={criptomoneda.priceUsd} precioUltimas24Horas={criptomoneda.changePercent24Hr} />
          })
        }
      </div>
        <footer>
          <p className="text-center m-3"> &copy; Hecho con la <span className="text-red-500">🍆</span> de <a href="https://github.com/jeffrycoder" target="_blank" rel="noreferrer">JeffryCoder</a></p>
        </footer>
    </div>
  );

}

export default App
