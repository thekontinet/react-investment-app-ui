import React from 'react'

function ClipboardInput({children}) {
  return (
    <div className='flex justify-center align-center'>
      <div className='flex justify-center sm:justify-between items-center flex-col sm:flex-row w-full md:w-4/5 p-2 rounded-xl shadow-lg shadow-indigo-100/50 m-3 bg-white'>
        <div>
          <p className='text-sm md:text-xl pb-4 sm:pb-0 '>{children}</p>
        </div>
        <div className='bg-indigo-400 rounded-xl'>
          <p className='pt-2 pb-2 pl-2 pr-24 pl-24 sm:pb-3 sm:pt-3 sm:pr-7 sm:pl-7 text-white'>Copy</p>
        </div>
      </div>
    </div>
  )
}

export default ClipboardInput