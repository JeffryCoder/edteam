import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './components/App.jsx'
import Saludo from './components/Saludo.jsx'
import './main.css'
import Pagina404 from './components/Pagina404.jsx'
import PlantillaRoot from './components/PlantillaRoot.jsx'
import Home from './components/Home.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PlantillaRoot />}>
        <Route path='saludo' element={<Saludo />} />
        <Route path='criptomonedas' element={<App />} />
      </Route>
      <Route index element={<Home />} />
      <Route path='*' element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>
)
