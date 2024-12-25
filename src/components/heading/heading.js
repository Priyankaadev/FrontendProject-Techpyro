import React from 'react'

function heading({head, body}) {
  return (
    <div className='row-1 flex flex-col items-center mb-[5%] mt-[4%] '>
        <p className='font-semibold text-[27px] md:text-[58.98px] mb-5 '>{head}</p>
        <p className='px-[10%] md:text-[24px] text-center text-[16px] '>{body}</p>
      </div>
  )
}

export default heading
