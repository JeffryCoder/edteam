import { Outlet } from 'react-router-dom'
import Menu from './menu/Menu'
import Footer from './menu/Footer'

const PlantillaRoot = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  )
}
export default PlantillaRoot
