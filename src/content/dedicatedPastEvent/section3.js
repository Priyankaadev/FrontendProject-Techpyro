import React from 'react'

function section3() {
  return (
    <div className='w-full mt-[5%] md:px-[5%]'>
      <p className='md:text-[40px] font-semibold mb-[3%] text-[27px] px-[5%]'>Event Gallery</p>
    
    <div className='grid md:grid-cols-6 md:grid-flow-row gap-3 px-[5%] '>
      <div className='md:col-span-2  '>  <img src='/events/eventimg1.png' className='object-cover h-full  '/></div>
       <div className='md:col-span-2   '> <img src='/events/eventimg2.png' className='object-cover h-full '/></div>
       <div className='md:col-span-2  '> <img src='/events/eventimg3.png' className='object-cover w-full'/></div>

       <div className='md:col-span-3 '><img src='/events/eventimg3.png'  className='object-cover w-full' /></div> 
       <div className='md:col-span-3'> <img src='/events/eventimg2.png' className='object-cover h-full ' /></div> 

       <div className='md:col-span-2 '> <img src='/events/eventimg2.png' className='object-cover h-full ' /></div>
       <div className='md:col-span-2 '> <img src='/events/eventimg4.png' className='object-cover h-full w-full ' /></div>
       <div className='md:col-span-2 '> <img src='/events/eventimg1.png' className='object-cover h-full '/></div>
    </div>
    </div>
  )
}

export default section3
