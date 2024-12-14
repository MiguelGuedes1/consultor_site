import React, { useEffect, useState } from 'react'


import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testemunhos from './components/Testemunhos'
import Contacto from './components/Contacto'


const App = () => {




  return (
    
    <div className='w-full overflow-hidden'>

      <Header/>
      <About/>
      <Projects/>
      <Testemunhos/>
      <Contacto/>


    </div>
  )
}

export default App

