// import { useContext } from 'react'
import { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
// import { UserContext } from '../../context/UserContext'

const Menu = () => {
  const usuario = useContext(UserContext)
  const navigate = useNavigate()
  const [usuarioLogueado, setUsuarioLogueado] = useState(false)

  useEffect(() => {
    if (window.localStorage.getItem('tokenFrixzitoCripto')) setUsuarioLogueado(true)
  }, [usuario])
  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <NavLink to='/' className='flex items-center'>
          <img src='https://flowbite.com/docs/images/logo.svg' className='h-8 mr-3' alt='FrixzitoCripto Logo' />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>FrixzitoCripto</span>
        </NavLink>
        <button data-collapse-toggle='navbar-default' type='button' className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-default' aria-expanded='false'>
          <span className='sr-only'>Open main menu</span>
          <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <NavLink to='/' className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500' aria-current='page'>Inicio</NavLink>
            </li>
            <li>
              <NavLink to='/criptomonedas' className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Criptomonedas</NavLink>
            </li>
            <li>
              <NavLink to='/about' className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Acerca de</NavLink>
            </li>
            <li>
              <NavLink to='/perfil' className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Perfil de {usuario.nombre}</NavLink>
            </li>
            <li>
              <NavLink
                to='/login'
                onClick={() => {
                  window.localStorage.removeItem('tokenFrixzitoCripto')
                  navigate('/login')
                }}
                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                {/* Cerrar sesion */}
                {usuarioLogueado ? 'Cerrar sesion' : 'Iniciar sesion'}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
export default Menu
