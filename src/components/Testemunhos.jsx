import React from 'react'
import { assets } from "../assets/assets"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";




const Testemunhos = () => {

    const testemunhos = [
        {
            id: 1,
            name: "Miguel Silva",
            avatar: assets.profile_img_1,
            testimonial: "Sem o Ricardo, nunca teria encontrado a casa perfeita para a minha família. O seu profissionalismo e dedicação fizeram toda a diferença. Recomendo sem hesitar!"
        },
        {
            id: 2,
            name: "Ricardo Manuel",
            avatar: assets.profile_img_2,
            testimonial: "O Ricardo foi incansável em ajudar-nos a encontrar a nossa casa de sonho. Sempre atento aos detalhes, guiou-nos por todo o processo com uma confiança que nos tranquilizou."
        },
        {
            id: 3,
            name: "Cesar Silva",
            avatar: assets.profile_img_3,
            testimonial: "Agradeço ao Ricardo por todo o empenho e paciência. Encontrou exatamente o que procurávamos e tornou todo o processo muito mais simples e agradável."
        },
        {
            id: 4,
            name: "Maria Pereira",
            avatar: assets.avatar_5,
            testimonial: "Com o Ricardo, sentimos que estávamos em boas mãos desde o primeiro dia. Encontrar a casa ideal parecia impossível, mas ele tornou-o realidade!"
        },
        {
            id: 5,
            name: "Joana Franco",
            avatar: assets.avatar_4,
            testimonial: "O Ricardo superou todas as expectativas. Sem a sua experiência e orientação, nunca teríamos encontrado o lar perfeito para nós."
        },
        {
            id: 6,
            name: "Luis Almeida",
            avatar: assets.avatar_3,
            testimonial: "Estamos extremamente gratos ao Ricardo por nos ajudar a concretizar este grande sonho. A sua dedicação e profissionalismo são realmente inspiradores."
        },
        {
            id: 7,
            name: "Castro Costa",
            avatar: assets.avatar_2,
            testimonial: "Não poderia estar mais satisfeita com o trabalho do Ricardo. Encontrou-nos a casa ideal e acompanhou-nos em cada passo com uma atenção incrível."
        },
        {
            id: 8,
            name: "Carlos Lopes",
            avatar: assets.avatar_1,
            testimonial: "Graças ao Ricardo, hoje vivemos na casa que sempre desejámos. Ele foi impecável em todo o processo e recomendo-o a todos que procuram um consultor de confiança."
        },
        {
            id: 9,
            name: "Ricardo Manuel",
            avatar: assets.profile_img_2,
            testimonial: "O Ricardo foi incansável em ajudar-nos a encontrar a nossa casa de sonho. Sempre atento aos detalhes, guiou-nos por todo o processo com uma confiança que nos tranquilizou."
        },
    ];
    

    return (
        <motion.section 
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        
        
        id='Testemunhos' className='p-14 '>
            <div className='container mx-auto text-center '>
     
                <div className='flex items-center justify-center flex-col mb-10'>
                    <div className='grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            testemunhos.map((testemunho, index) => (
                                <div key={index} className='bg-blue-400 p-7 shadow-md rounded-md'>
                                    <div className='md-4'>
                                        <img 
                                            className='mx-auto h-12 w-12 rounded-full' 
                                            src={testemunho.avatar} 
                                            alt={`${testemunho.name}'s avatar`} 
                                        />
                                    </div>
                                    <p className='text-gray-700 mb-2 mt-3'>{testemunho.testimonial}</p>
                                    <p className='font-semibold mt-1'>{testemunho.name}</p>
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 size-3" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 size-3" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 size-3" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 size-3" />
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-400 size-3" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Testemunhos
