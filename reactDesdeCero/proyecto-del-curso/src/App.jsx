import { useEffect, useState } from "react"
import TarjetaCriptomoneda from "./components/TarjetaCriptomoneda"
import './App.css'
function App() {

  const API_URL = import.meta.env.VITE_API_URL
  const [criptomonedas, setCriptomonedas] = useState()

  useEffect(() => {
    fetch(`${API_URL}assets`)
      .then((resp) => resp.json())
      .then((data) => { 
        setCriptomonedas(data.data) 
      })
      .catch(() => {
        console.log("La petición falló")
      })
  }, [])

  if (!criptomonedas) return <h1>Cargando...</h1>;

  
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
