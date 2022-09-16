import React from 'react'

function Page({number}) {
  return (
    <div>
        <div className='px-2 py-1 border border-indigo-300 w-fit rounded shadow-sm'>{number}</div>
    </div>
  )
}

export default Page