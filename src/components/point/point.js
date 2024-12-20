import React from 'react'

function point({img, point}) {
  return (
    <div className='container flex gap-3'>
      <div className='row-1'>
        <img src={img} className='h-[70%]' />

      </div>
      <div className='row-2'>
        <p>{point}</p>
      </div>
    </div>
  )
}

export default point
