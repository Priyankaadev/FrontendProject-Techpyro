import React from 'react'

function eventVideo({img, head, body}) {
  return (
    <div className='outer h-auto w-full mb-[5%] md:mb-0 bg-white  flex flex-col '>
      <div className='flex basis-[30%] card-img md:items-center md:justify-center'>
      <img src={img} className='bg-cover w-full'/>
      </div>
      <div className='flex basis-[60%] flex-col justify-center'>
      <p className='font-semibold text-[20px]'>{head}</p>
      <p className='card-body text-[12px]'>{body}</p>
      </div>
    </div>
  )
}

export default eventVideo