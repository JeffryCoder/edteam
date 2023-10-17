import { useRef, useEffect } from "react"

function TarjetaCriptomoneda ({id, nombreCriptomoneda = 'NombreCripto', precioCriptomoneda = 'PrecioCripto', precioUltimas24Horas}) {

  const refTarjetaCriptomoneda = useRef()

  useEffect(()=> {
    // console.log("Se renderizó el componente TarjetaCriptomoneda")
    console.log(refTarjetaCriptomoneda)
    if (precioUltimas24Horas > 0){
      refTarjetaCriptomoneda.current.classList.add('bg-green-500')
    }else if(precioUltimas24Horas < 0){
      refTarjetaCriptomoneda.current.classList.add('bg-red-500')
    }else{
      refTarjetaCriptomoneda.current.classList.add('bg-yellow-500')
    }
  }, [])
  
  return (
    <>
      <div className="car" id={id}>
        <a ref={refTarjetaCriptomoneda} href="#" className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{nombreCriptomoneda}</h5>
          <p className="font-normal text-gray-700">USD${precioCriptomoneda}</p>
        </a>
      </div>
    </>
  )
}
export default TarjetaCriptomoneda
