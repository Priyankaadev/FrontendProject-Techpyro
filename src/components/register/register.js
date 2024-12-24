import React from 'react'

function register() {
  return (
    <div className='container bg-[#272761] flex items-center   mt-[10%] py-2 md:py-5'>
      <div className='h-[100%] w-[40%]'>
      <img src='/events/register.png' className='h-[40%] w-[100%] ' />
      </div>
      <div className='flex flex-col w-full items-center justify-center md:text-center gap-2 md:gap-5 md:pr-[30%]'>
        <p className='md:text-[55px] text-[22px] text-white font-semibold leading-none '>Register to i-gauge to compare Institutions</p>
        <p className='md:text-[20px] text-[12px] text-white'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...</p>
      <button className='bg-[#F7A600] md:p-3 p-2 '>Register Now</button>
      </div>
    </div>
  )
}

export default register
