import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Saludo from './components/Saludo.jsx'
import './main.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/saludo' element={<Saludo />} />
    </Routes>
  </BrowserRouter>
)
