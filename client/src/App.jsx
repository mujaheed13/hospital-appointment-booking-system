import { useState } from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer'
import Midsection from './components/Midsection'
import Navbar from './components/Navbar'
import Login from './components/login'
import AllRoute from './routes/route'

function App() {
  

  return (
    <>
      <AllRoute />
    </>
  )
}

export default App
