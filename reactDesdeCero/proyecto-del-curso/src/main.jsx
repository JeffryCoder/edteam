import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './components/App.jsx'
import './main.css'
import Pagina404 from './components/Pagina404.jsx'
import PlantillaRoot from './components/PlantillaRoot.jsx'
import Home from './components/Home.jsx'
import PaginaUnicaCriptomoneda from './components/PaginaUnicaCriptomoneda.jsx'
import Perfil from './components/Perfil.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='perfil' element={<PlantillaRoot />}>
        <Route index element={<Perfil />} />
      </Route>
      <Route path='criptomonedas' element={<PlantillaRoot />}>
        <Route index element={<App />} />
        <Route path=':id' element={<PaginaUnicaCriptomoneda />} />
      </Route>
      <Route path='*' element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>
)
