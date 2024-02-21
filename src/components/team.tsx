import Image from 'next/image'
import React from 'react'
import { dataTeam } from '../../data'

const Team = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
      <div className='grid grid-cols-2'>
        {
          dataTeam.map((item) => (
            <div key={item.id} className='w-full h-full'>
              <Image
                src={`${item.imgURl}`}
                alt={`${item.name}`}
                height={200}
                width={200}
                className='w-full h-full object-cover'
              />
            </div>
          ))
        }        
      </div>
      <div className='m-2 text-center'>
        <h2 className='text-7xl text-watermelon '>Conoce al equipo</h2>
        <br />
        <p className='text-xl'>
          Empleamos un personal de servicio completo y apasionado, Nuestro equipo está formado por profesionales comprometidos con la excelencia y la satisfacción del cliente.
        </p>
      </div>
    </div>
  )
}

export default Team