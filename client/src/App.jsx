import { useState } from 'react'

import './App.css'
import Carousel from './components/carousel'

import Footer from './components/Footer'
import Midsection from './components/Midsection'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div>
    <Navbar/>
    <Carousel/>
    <Midsection/>
    <Footer/>
    </div>
  )
}

export default App;
