import React, { useEffect, useState } from 'react'
import {assets} from "../assets/assets"
import { Instagram,Facebook,Linkedin } from 'lucide-react'

const NavBar = () => {

  const [showMobileMenu,setShowMobileMenu] = useState(false)

  useEffect(()=>{

    if(showMobileMenu) {
      document.body.style.overflow = "hidden"
    } else{
         document.body.style.overflow = "auto"
    } return () => {
        document.body.style.overflow = "auto"
    }

  },[showMobileMenu])


  return (

    <div className='absolute top-0 left-0 w-full z-0'>

      <div className='container mx-auto flex justify-between items-center py-4 px-4 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="logo" />
          <ul className="hidden md:flex gap-12 text-white">
            <li>
              <a
                href="#Header"
                className="relative cursor-pointer text-[18px] text-white transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:text-white hover:before:w-full"
              >
                Home
              </a>
            </li>
            <li>
            <a
                href="#About"
                className="relative cursor-pointer text-[18px] text-white transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:text-white hover:before:w-full"
              >
                Sobre
              </a>
            </li>
            <li>
            <a
                href="#Header"
                className="relative cursor-pointer text-[18px] text-white transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:text-white hover:before:w-full"
              >
                Vendas
              </a>
            </li>
            <li>
            <a
                href="#Header"
                className="relative cursor-pointer text-[18px] text-white transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-300 hover:text-white hover:before:w-full"
              >
                Testemunhos
              </a>
            </li>
          </ul>



          <div className="flex gap-3 hidden md:flex text-white">
              <div>
                  <a href="#" className="relative inline-block transition-all duration-300 ease-in-out transform hover:scale-125 hover:shadow-xl hover:translate-y-[-4px]">
                      <Instagram className="text-white w-6 h-6" />
                  </a>
              </div>
              <div>
                  <a href="#" className="relative inline-block transition-all duration-300 ease-in-out transform hover:scale-125 hover:shadow-xl hover:translate-y-[-4px]">
                      <Facebook className="text-white w-6 h-6" />
                  </a>
              </div>
              <div>
                  <a href="#" className="relative inline-block transition-all duration-300 ease-in-out transform hover:scale-125 hover:shadow-xl hover:translate-y-[-4px]">
                      <Linkedin className="text-white w-6 h-6" />
                  </a>
              </div>
          </div>




        <img onClick={() => setShowMobileMenu(true)} className='md:hidden w-7 cursor-pointer' src={assets.menu_icon} alt="" />      {/* --- Botao para ABRIR menu --*/}



      </div>

                {/* ------------------ Mobile menu -----------------------*/}

        <div className= {`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`} >
             
             <div className='flex justify-end p-6 cursor-pointer'>
              <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />      {/* --- Botao para FECHAR menu --*/}
             </div>

            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
              <a onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#Header">Home</a>
              <a onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#About">About</a>
              <a onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#Projects">Projects</a>
              <a onClick={() => setShowMobileMenu(false)} className='px-4 py-2 rounded-full inline-block' href="#Testimonails">Testemunhos</a>
            </ul>
        </div>

        
    </div>
  )
}

export default NavBar
