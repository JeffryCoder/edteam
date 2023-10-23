import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/saludo'>Saludo</Link></li>
      </ul>
    </nav>
  )
}
export default Menu
