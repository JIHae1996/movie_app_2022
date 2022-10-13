import React from 'react'
import Home from './routes/Home'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import About from './routes/About'
import Detail from './routes/Detail'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App