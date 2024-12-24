import React from 'react'

function register() {
  return (
    <div className='container bg-[#272761] flex mt-[10%]'>
      <img src='/events/register.png' sizes='h-10 w-10'/>
      <div className='flex flex-col justify-center items-center gap-5'>
        <p className='md:text-[55px] text-[22px] text-white font-semibold leading-none '>Register to i-gauge to compare Institutions</p>
        <p className='md:text-[20px] text-[12px] text-white'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...</p>
      <button className='bg-[#F7A600] p-3 '>Register Now</button>
      </div>
    </div>
  )
}

export default register
