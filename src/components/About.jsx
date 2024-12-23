import React from 'react';
import { assets } from '../assets/assets';
import { motion } from "framer-motion"; 
import CountUp from 'react-countup';

const About = () => {

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='container flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-[100px] w-full overflow-hidden' 
      id='About'
    >

      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
        Sobre <span className='underline underline-offset-4 decoration-1 font-light'>Ricardo Santos</span>
      </h1>  

      <p className='text-gray-500 max-w-80 text-center mb-8 py-3'>A sua confiança, o meu compromisso.</p>

      <div className='flex flex-col xl:flex-row items-center md:items-start md:gap-20'>

        <img 
          src={assets.casa_1} 
          className='w-[330px] max-w-[700px] md:w-[37rem] rounded-full' 
          alt="" 
        />

        <div className='flex flex-col items-start md:items-start mt-10 text-gray-600'>

          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>
                <CountUp start={0} end={10} duration={4.5} />+
              </p>
              <p>Anos experiência</p>
            </div>

            <div>
              <p className='text-4xl font-medium text-gray-800'>
                <CountUp start={0} end={30} duration={4.5} />+
              </p>
              <p>Projectos em mãos</p>
            </div>

            <div>
              <p className='text-4xl font-medium text-gray-800'>
                <CountUp start={0} end={250} duration={4.5} />+
              </p>
              <p>Imoveis Vendidos</p>
            </div>

            <div>
              <p className='text-4xl font-medium text-gray-800'>
                <CountUp start={0} end={4} duration={4.5} />+
              </p>
              <p>Consultor do ano</p>
            </div>
          </div>

          <p className='my-10 max-w-lg text-gray-400'>
            Com ampla experiência no mercado imobiliário, sou um consultor dedicado a oferecer soluções personalizadas e de confiança aos meus clientes. Com uma abordagem focada nas necessidades individuais, procuro sempre garantir a melhor negociação, seja na compra, venda ou arrendamento de imóveis. O meu compromisso com a transparência, ética e excelência no atendimento proporciona uma experiência única e segura a cada cliente. Confie na experiência de um profissional que coloca os seus interesses em primeiro lugar.
          </p>

          <button 
            type="button" 
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            <a 
              href="https://api.whatsapp.com/send?phone=+351913873367&text=Boas,%20estou%20%20interessado%20nos%20seus%20servi%C3%A7os." 
              target='blank'
            >
              Entre em Contacto
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
