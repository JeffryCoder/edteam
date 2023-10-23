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
        
        
        <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50">
            <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse">Cargando...</div>
        </div>

      );
  }

  
  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      
        {/* {criptomonedas.map((criptomoneda) => {
          return <li key={criptomoneda.id}>Nombre: <br /> {criptomoneda.name} <br /> Precio: <br />{criptomoneda.priceUsd}</li>;
        })} */}
        
        {
          criptomonedas.map((criptomoneda) => {
            console.log(criptomoneda)
            return <TarjetaCriptomoneda key={criptomoneda.id} id={criptomoneda.id} nombreCriptomoneda={criptomoneda.name} precioCriptomoneda={criptomoneda.priceUsd} precioUltimas24Horas={criptomoneda.changePercent24Hr} />
          })
        }
      
      
    </>
  );

}

export default App
