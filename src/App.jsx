import React, { useEffect, useState } from 'react'


import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testemunhos from './components/Testemunhos'
import Contacto from './components/Contacto'
import Footer from './components/Footer'


const App = () => {




  return (
    
    <div className='w-full overflow-hidden'>

      <Header/>
      <About/>
      <Projects/>
      <Testemunhos/>
      <Contacto/>
      <Footer/>


    </div>
  )
}

export default App

