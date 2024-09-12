/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact/Contact'
import PaintServices from './components/layouts/paintwork/PaintServices'

function App() {


  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/paint-work" element={<PaintServices />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
