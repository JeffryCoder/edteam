import axios from 'axios'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const submit = (e) => {
    e.preventDefault()
    axios.post('https://reqres.in/api/login', user)
      .then(data => {
        window.localStorage.setItem('tokenFrixzitoCripto', data.data.token)
        console.log(data)
        navigate('/')
      })
      .catch(e => console.error(e))
  }

  if (window.localStorage.getItem('tokenFrixzitoCripto')) return <Navigate to='/' />

  return (

    <div className='login-container'>
      <h1>Iniciar sesion</h1>
      <form onSubmit={submit}>
        <div className='field'>
          <label htmlFor='email'>Correo electronico</label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value
              })
            }} type='email' name='email'
          />
        </div>
        <div className='field'>
          <label htmlFor='password'>Contraseña</label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value
              })
            }} type='password' name='password'
          />
        </div>
        <div>
          <button type='submit'>Acceder</button>
        </div>
      </form>
    </div>
  )
}
export default Login
