const Login = () => {
  return (
    <div className='login-container'>
      <h1>Iniciar sesion</h1>
      <form>
        <div className='field'>
          <label htmlFor='email'>Correo electronico</label>
          <input type='email' name='email' />
        </div>
        <div className='field'>
          <label htmlFor='password'>Contraseña</label>
          <input type='password' name='password' />
        </div>
        <div>
          <button type='submit'>Iniciar sesion</button>
        </div>
      </form>
    </div>
  )
}
export default Login
