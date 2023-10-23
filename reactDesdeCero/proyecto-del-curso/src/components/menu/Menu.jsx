import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to='/'>Inicio</NavLink></li>
        <li><NavLink to='/saludo'>Saludo</NavLink></li>
      </ul>
    </nav>
  )
}
export default Menu
