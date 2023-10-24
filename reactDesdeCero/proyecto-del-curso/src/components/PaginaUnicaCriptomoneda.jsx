import { useParams } from 'react-router-dom'

const PaginaUnicaCriptomoneda = () => {
  const params = useParams()
  return (
    <>
      <h1>Hola, soy la criptomoneda: {params.id}</h1>
    </>
  )
}
export default PaginaUnicaCriptomoneda
