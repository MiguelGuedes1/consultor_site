import React from 'react';

const Contacto = () => {

  return (

    <section className="bg-white dark:bg-gray-900">

      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">

        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Entre em Contacto 
        </h2>

        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Tem alguma dúvida ou deseja saber mais sobre os nossos imóveis? Envie-nos uma mensagem e vamos ajudá-lo a encontrar a casa dos seus sonhos. Estamos prontos para fazer negócios consigo!
        </p>

        <form action="#" className="space-y-8">
          <div>
            <label 
              htmlFor="email" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              O seu email
            </label>
            <input 
              type="email" 
              id="email" 
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
              placeholder="exemplo@dominio.com" 
              required 
            />
          </div>
          <div>
            <label 
              htmlFor="subject" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Assunto
            </label>
            <input 
              type="text" 
              id="subject" 
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
              placeholder="Conte-nos como podemos ajudar" 
              required 
            />
          </div>
          <div className="sm:col-span-2">
            <label 
              htmlFor="message" 
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              A sua mensagem
            </label>
            <textarea 
              id="message" 
              rows="6" 
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
              placeholder="Deixe-nos a sua mensagem...">
            </textarea>
          </div>
          <button 
            type="submit" 
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-400 sm:w-fit bg-blue-600focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-700 dark:hover:bg-cyan-800 dark:focus:ring-cyan-900">
            Enviar mensagem
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contacto;
