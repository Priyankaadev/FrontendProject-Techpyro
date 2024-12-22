import React from 'react'

function card({img, head, body}) {
  return (
    <div className='outer-container h-[25em] w-[20em] md:h-[10em] md:w-[32em] bg-white px-[5%] flex md:flex-row flex-col '>
      <div className='flex basis-[30%] card-img md:items-center md:justify-center'>
      <img src={img} className='md:h-[50%] md:w-[65%]'/>
      </div>
      <div className='flex basis-[60%] flex-col justify-center'>
      <p className='font-semibold text-[20px]'>{head}</p>
      <p className='card-body text-[15px]'>{body}</p>
      </div>
    </div>
  )
}

export default card
