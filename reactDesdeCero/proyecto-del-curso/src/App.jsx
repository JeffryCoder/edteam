import { useEffect, useState } from "react"
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
      <ol>
        {criptomonedas.map((criptomoneda) => {
          return <li key={criptomoneda.id}>Nombre: <br /> {criptomoneda.name} <br /> Precio: <br />{criptomoneda.priceUsd}</li>;
        })}
      </ol>
    </>
  );

}

export default App