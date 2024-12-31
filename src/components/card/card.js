import React from 'react'

function card({img, head, body}) {
  return (
    <div className='outer-container  h-auto w-full bg-white px-[5%] flex md:flex-row flex-col '>
      <div className='flex basis-[30%]  card-img md:items-center md:justify-center'>
      <img src={img} />
      </div>
      <div className='flex basis-[60%] flex-col justify-center p-5'>
      <p className='font-semibold text-[20px]'>{head}</p>
      <p className='card-body text-[15px] '>{body}</p>
      </div>
    </div>
  )
}

export default card
