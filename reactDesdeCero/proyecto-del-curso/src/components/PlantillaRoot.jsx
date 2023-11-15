import { Navigate, Outlet } from 'react-router-dom'
import Menu from './menu/Menu'
import Footer from './menu/Footer'

const PlantillaRoot = () => {
  if (!window.localStorage.getItem('tokenFrixzitoCripto')) return <Navigate to='/login' />
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  )
}
export default PlantillaRoot
