import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Saludo from './components/Saludo.jsx'
import './main.css'
import Pagina404 from './components/Pagina404.jsx'
import Menu from './components/menu/Menu.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/saludo' element={<Saludo />} />
      <Route path='*' element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>
)
