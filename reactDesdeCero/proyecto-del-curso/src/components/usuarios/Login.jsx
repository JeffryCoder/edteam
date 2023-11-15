import { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const submit = (e) => {
    e.preventDefault()
    console.log(user)
  }
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
