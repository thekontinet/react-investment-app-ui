import React from 'react'

function Card({title, content}) {
  return (
    <div className='bg-indigo-800 -z-10 rounded overflow-hidden'>
        <div className='bg-indigo-700 rounded-br-full p-10 text-white w-1/2 items-center justify-between'>
        <p className='font-bold text-4xl'>{content}</p>
        <p className='text-lg'>{title}</p>
       </div>
    </div>
  )
}

export default Card