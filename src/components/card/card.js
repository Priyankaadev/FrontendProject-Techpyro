import React from 'react'

function card({img, head, body}) {
  return (
    <div className='outer-container h-[10em] w-[32em] bg-white flex '>
      <div className='flex basis-[25%] card-img items-center justify-center'>
      <img src={img} className='h-[50%] w-[65%]'/>
      </div>
      <div className='flex basis-[70%] flex-col  justify-center'>
      <p className='font-semibold text-[20px]'>{head}</p>
      <p className='card-body text-[15px]'>{body}</p>
      </div>
    </div>
  )
}

export default card
