import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Botao  from './components/botao'
import Home  from './components/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Projeto E-commerce Componentezado</h1>
      <div className="card">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="home/botao" element={<Botao/>} />
        </Routes>
      </div>

    </>
  )
}

export default App
