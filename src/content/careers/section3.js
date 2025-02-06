import React from 'react'

import Heading from '@/components/heading/heading'
import Form from '@/components/form/form'

function Section3() {
  return (
    <div className='flex flex-col mt-[8%]'>
      <Heading head={"Apply For Other Positions"}
       body={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"}
       />
       <div className='flex items-center justify-center px-5 '>
       <div className='h-[50%] w-[50%]'>
        <img src='/career/apply.png' className='h-[70%] w-[70%]' />
       </div> 

       <div className='md:block hidden'>
         <Form />
        </div>
      
       </div>
    </div>
  )
}

export default Section3
