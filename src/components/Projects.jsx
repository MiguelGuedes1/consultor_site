import React from 'react';
import { Carousel } from "@material-tailwind/react";
import {assets} from "../assets/assets"
import { motion } from "motion/react"


const Projects = () => {
  return (
    <motion.div
    
    initial={{opacity:0,x:-200}}
    transition={{duration:1.5}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}

    id='Projects' className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Imóveis <span className='underline underline-offset-4 decoration-1 under font-light'>Vendidos</span></h1>
      <p className='text-gray-500 text-center mb-8 mt-3 mx-auto py-7'>

      Nesta secção, partilho consigo algumas das minhas mais recentes vendas, que representam o resultado do meu compromisso com a excelência no mercado imobiliário. Cada imóvel vendido reflete a confiança que os meus clientes depositaram em mim e o meu empenho em superar as suas expectativas.

      O meu objetivo é sempre ajudar a concretizar sonhos, assegurando que cada transação seja realizada com transparência, eficiência e profissionalismo. Convido-o a explorar este slideshow e a descobrir algumas das histórias de sucesso que ajudei a construir!

      </p>

      <Carousel
        className="rounded-xl "
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute top-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {/* Slide 1 */}

        <motion.div
        animate={{ opacity: 1 }} 
        initial={{ opacity: 0 }} 
        transition={{ duration: 1.8, delay: 1, ease: "linear" }} 
        
        
        className="relative h-[500px] w-full md:w-full md:h-full">
          <img
            src={assets.casa}
            alt="image 1"
            className="relative h-[500px] w-full md:w-full md:h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/30 text-white px-4 py-2 rounded-lg flex flex-col gap-2">
            <span className="text-sm md:text-base"> Localização : Boavista </span>
            <span className="text-sm md:text-base"> Preço : 550.000€ </span>
          </div>
        </motion.div>

       {/* Slide 2 */}

       <div className="relative h-auto w-full">
          <img
            src={assets.casa_2}
            alt="image 1"
             className="relative h-[500px] w-full md:w-full md:h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/30 text-white px-4 py-2 rounded-lg flex flex-col gap-2">
            <span className="text-sm md:text-base"> Localização : Oliveira do Douro </span>
            <span className="text-sm md:text-base"> Preço : 250.000€ </span>
          </div>
        </div>

          {/* Slide 3 */}

        <div className="relative h-auto w-full">
          <img
          src={assets.casa_3}
            alt="image 1"
              className="relative h-[500px] w-full md:w-full md:h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/30 text-white px-4 py-2 rounded-lg flex flex-col gap-2">
            <span className="text-sm md:text-base"> Localização : Madalena </span>
            <span className="text-sm md:text-base"> Preço : 320.000€ </span>
          </div>
        </div>

         {/* Slide 4 */}

        <div className="relative h-auto w-full">
          <img
           src={assets.casa_4}
            alt="image 1"
            className="relative h-[500px] w-full md:w-full md:h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/30 text-white px-4 py-2 rounded-lg flex flex-col gap-2">
            <span className="text-sm md:text-base"> Localização : Foz </span>
            <span className="text-sm md:text-base"> Preço : 985.000€ </span>
          </div>
        </div>

          {/* Slide 5 */}

        <div className="relative h-auto w-full">
          <img
           src={assets.casa_5}
            alt="image 1"
                  className="relative h-[500px] w-full md:w-full md:h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/30 text-white px-4 py-2 rounded-lg flex flex-col gap-2">
            <span className="text-sm md:text-base"> Localização : Canidelo </span>
            <span className="text-sm md:text-base"> Preço : 710.000€ </span>
          </div>
        </div>

           {/* Slide 6 */}

        <div className="relative h-auto w-full">
          <img
           src={assets.casa_6}
            alt="image 1"
                  className="relative h-[500px] w-full md:w-full md:h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/30 text-white px-4 py-2 rounded-lg flex flex-col gap-2">
            <span className="text-sm md:text-base"> Localização : Porto </span>
            <span className="text-sm md:text-base"> Preço : 695.000€ </span>
          </div>
        </div>


          {/* Slide 7 */}

        <div className="relative h-auto w-full">
          <img
          src={assets.casa_7}
            alt="image 1"
                       className="relative h-[500px] w-full md:w-full md:h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/30 text-white px-4 py-2 rounded-lg flex flex-col gap-2">
            <span className="text-sm md:text-base"> Localização : Espinho </span>
            <span className="text-sm md:text-base"> Preço : 850.000€ </span>
          </div>
        </div>


          {/* Slide 8 */}

        <div className="relative h-auto w-full">
          <img
      src={assets.casa_8}
            alt="image 1"
                         className="relative h-[500px] w-full md:w-full md:h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/30 text-white px-4 py-2 rounded-lg flex flex-col gap-2">
            <span className="text-sm md:text-base"> Localização : Serzedo </span>
            <span className="text-sm md:text-base"> Preço : 140.000€ </span>
          </div>
        </div>


          {/* Slide 9 */}

        <div className="relative h-auto w-full">
          <img
        src={assets.casa_9}
            alt="image 1"
                     className="relative h-[500px] w-full md:w-full md:h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/30 text-white px-4 py-2 rounded-lg flex flex-col gap-2">
            <span className="text-sm md:text-base"> Localização : Avintes </span>
            <span className="text-sm md:text-base"> Preço : 367.500€ </span>
          </div>
        </div>


      {/* Slide 10 */}

        <div className="relative h-auto w-full">
          <img
      src={assets.casa_4}
            alt="image 1"
                      className="relative h-[500px] w-full md:w-full md:h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black/30 text-white px-4 py-2 rounded-lg flex flex-col gap-2">
            <span className="text-sm md:text-base"> Localização : Boavista </span>
            <span className="text-sm md:text-base"> Preço : 550.600€ </span>
          </div>
        </div>


      </Carousel>
    </motion.div>
  );
};

export default Projects;
