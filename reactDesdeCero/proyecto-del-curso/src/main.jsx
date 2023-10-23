import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './components/App.jsx'
import Saludo from './components/Saludo.jsx'
import './main.css'
import Pagina404 from './components/Pagina404.jsx'
import PlantillaRoot from './components/PlantillaRoot.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PlantillaRoot />}>
        <Route index element={<App />} />
        <Route path='saludo' element={<Saludo />} />
      </Route>
      <Route path='*' element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>
)
