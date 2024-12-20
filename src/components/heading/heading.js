import React from 'react'

function heading({head, body}) {
  return (
    <div className='row-1 flex flex-col items-center mb-5 '>
        <p className='font-semibold text-[58.98px] mb-5 mt-[8%]  '>{head}</p>
        <p className='px-[10%] text-[24px] text-center '>{body}</p>
      </div>
  )
}

export default heading
