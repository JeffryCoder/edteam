import { useState, useEffect } from 'react'

const Calculator = () => {
  const [numbers, setNumbers] = useState({
    number1: 0,
    number2: 0
  })

  useEffect(() => {
    console.log(new Date().getTime())
  })
  return (
    <div className='calculator'>
      <h3>Calculadora</h3>
      <input
        type='number'
        onChange={(e) => { setNumbers({ ...numbers, number1: e.target.value }) }}
      />
      <input
        type='number'
        onChange={(e) => { setNumbers({ ...numbers, number2: e.target.value }) }}
      />
      <button type='submit' name='Enviar'>Sumar</button>
      <p>Resultado: {Number(numbers.number1) + Number(numbers.number2)}</p>
    </div>
  )
}

export default Calculator
