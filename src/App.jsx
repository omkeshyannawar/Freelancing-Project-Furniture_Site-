import { useState } from 'react'

import Navbar from './components/Navbar/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ProductPage from './components/ProductPage/ProductPage'
import './App.css'
import './components/Navbar/Navbar/Navbar.css'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
      <ProductPage/>
      <WhyChooseUs/>
    </>
  )
}

export default App
