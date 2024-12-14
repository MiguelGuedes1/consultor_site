import React from 'react'
import { assets } from '../assets/assets'

const About = () => {

  return (

    <div className='container flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-[100px] w-full overflow-hidden ' id='About'>

        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About  <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span>  </h1>  
       
        <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate about Properties, dedicated to your vision</p>

        <div className='flex flex-col xl:flex-row items-center md:items-start md:gap-20 '>

            <img src='src/assets/casa.jpg' className='w-[330px] max-w-[700px] md:w-[37rem] rounded-full  ' alt="" />

            <div className='flex flex-col items-start md:items-start mt-10 text-gray-600'>

                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800  '>10+</p>
                        <p>Years of Excellence</p>
                    </div>

                    <div>
                        <p className='text-4xl font-medium text-gray-800  ' >12+</p>
                        <p>Projects Completed</p>
                    </div>

                    <div>
                        <p className='text-4xl font-medium text-gray-800  ' >20+</p>
                        <p>Imoveis Vendidos</p>
                    </div>

                    <div>
                        <p className='text-4xl font-medium text-gray-800  ' >25+</p>
                        <p>Projectos em mãos</p>
                    </div>
                </div>

             
                    <p className='my-10 max-w-lg text-gray-400'>Com ampla experiência no mercado imobiliário, sou um consultor dedicado a oferecer soluções personalizadas e de confiança aos meus clientes. Com uma abordagem focada nas necessidades individuais, procuro sempre garantir a melhor negociação, seja na compra, venda ou arrendamento de imóveis. O meu compromisso com a transparência, ética e excelência no atendimento proporciona uma experiência única e segura a cada cliente. Confie na experiência de um profissional que coloca os seus interesses em primeiro lugar.</p>

                    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    ><a href="https://api.whatsapp.com/send?phone=+351913873367&text=Boas,%20estou%20%20interessado%20nos%20seus%20servi%C3%A7os." target='blank'>Entre em Contacto</a>
                    </button>
             

            </div>


        </div>

        

        
      
    </div>
  )
}

export default About
