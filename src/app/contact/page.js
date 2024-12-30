import React from 'react'

import Form from '@/components/form/form'

function page() {
  return (
    <div className=' bg-[#FFF1D2]'>

      <div className='flex flex-col md:flex-row px-[2%] '>

        <div className='contact-block flex flex-col p-[5%]  justify-center items-center basis-[50%]'>
            <div className='heading'>
              <p className='font-semibold md:text-[58.98px] text-[27px] md:leading-tight'>Get in Touch</p>
            
              <hr className='mt-5'  />

              <p className='text-[24px] mt-5'>
                Sed ut perspiciatis unde omnis 
                iste natus error sit
                voluptatem accusantium doloremque laudantium, 
                totam rem aperian
              </p>
              <img src='/contact/girl.png'/> 
              
              <div className='contact-details flex flex-col md:flex-row items-center justify-around mt-5 gap-3 md:gap-0'>
              <div className='message'>
                <img src='contact/message.png'/>
                <p>Email</p>
                <p>contact@igauge.in</p>
              </div>
              <div className='phone'>
                <img src='contact/phone.png' className='h-[40%]'/>
                <p>Phone Number</p>
                <p>+91 80 46469200</p>
              </div>
            </div>
            </div>
           
        </div>
       
        <div className='py-[5%] flex items-center'>
        <Form />
        </div>

      </div>

<img src='/contact/map.png'/>
    </div>
  )
}

export default page
