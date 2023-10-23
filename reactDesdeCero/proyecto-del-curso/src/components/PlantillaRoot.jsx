import { Outlet } from 'react-router-dom'
import Menu from './menu/Menu'

const PlantillaRoot = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}
export default PlantillaRoot
