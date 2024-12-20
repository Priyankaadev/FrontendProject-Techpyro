import React from 'react'

function heading2({head, body}) {
  return (
    <div className='row-1 flex flex-col mb-5   justify-center'>
    <p className='font-semibold text-[50px]  mb-4     '>{head}</p>
    <p className=' text-[18px] '>{body}</p>
  </div>
  )
}

export default heading2
