import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './components/App.jsx'
import './main.css'
import Pagina404 from './components/Pagina404.jsx'
import PlantillaRoot from './components/PlantillaRoot.jsx'
import Home from './components/Home.jsx'
import PaginaUnicaCriptomoneda from './components/PaginaUnicaCriptomoneda.jsx'
import Perfil from './components/Perfil.jsx'
import About from './components/About.jsx'
import { UserContextProvider } from './context/UserContext'
import Login from './components/usuarios/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PlantillaRoot />}>
          <Route index element={<Home />} />
          <Route path='perfil' element={<Perfil />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path='criptomonedas' element={<PlantillaRoot />}>
          <Route index element={<App />} />
          <Route path=':id' element={<PaginaUnicaCriptomoneda />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
)
