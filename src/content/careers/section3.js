import React from 'react'

import Heading from '@/components/heading/heading'

function section3() {
  return (
    <div className='flex flex-col mt-[8%]'>
      <Heading head={"Apply For Other Positions"}
       body={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"}
       />
       <div className='flex justify-between'>
       <div className='h-[50%] w-[50%]'>
        <img src='/career/apply.png' className='h-[60%] w-[60%]' />
       </div> 
       
       </div>
    </div>
  )
}

export default section3
