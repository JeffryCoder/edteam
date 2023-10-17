function TarjetaCriptomoneda ({nombreCriptomoneda = 'NombreCripto', precioCriptomoneda = 'PrecioCripto'}) {
  return (
    <>
      <div className="card">
        
      <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{nombreCriptomoneda}</h5>
        <p className="font-normal text-gray-700">USD${precioCriptomoneda}</p>
      </a>

      </div>
    </>
  )
}
export default TarjetaCriptomoneda
