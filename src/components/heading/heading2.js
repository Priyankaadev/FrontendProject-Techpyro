import React from 'react'

function heading2({head, body}) {
  return (
    <div className='row-1 flex flex-col mb-6 px-[5%] mt-5 justify-center '>
    <p className='font-semibold md:text-[50px] text-[27px]  mb-4   '>{head}</p>
    <p className=' text-[18px]  mb-5'>{body}</p>
  </div>
  )
}

export default heading2
