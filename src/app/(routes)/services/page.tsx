import Avatar from '@/components/avatar'
import CircleImage from '@/components/circle-image'
import SliderServices from '@/components/slider-services'
import TransitionPage from '@/components/transition-page'
import React from 'react'

const ServicePage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <div className='grid items-center justify-center h-screen max-w-5xl
      gap-6 mx-auto md:grid-cols-2 md:grid-flow-col'>
        <div className='max-w-[450px'>
          <h1 className='text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5'>Nuestros <span className='font-bold text-watermelon'>Servicios</span> </h1>
          <p className="mb-3 text-xl text-gray-300">Ofrecemos servicios de desarrollo web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS y JavaScript, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.</p>
          <button className="px-3 py-2 rounded-lg bg-watermelon hover:bg-watermelon/65">Contactanos</button>
        </div>

        {/* SLIDER */}
        <div>
          <SliderServices />
        </div>
      </div>


    </>
  )
}

export default ServicePage