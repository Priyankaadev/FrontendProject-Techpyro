import React from 'react'

function exhibitor({img, name, id, stall, hall }) {
  return (
    <div className='w-full flex flex-col shadow-lg' key={id}>
        <img src={img} alt='exhibitorimage' className='' />
        <p className='text-[20px] md:text-[25px] font-semibold p-2'>{name}</p>
        <div className='flex flex-col text-[15px] md:text-[20px] p-2 '>
            <p>Stall : {stall}</p>
            <p>Hall : {hall}</p>
        </div>
        <div className=''>
        <button className='bg-orange-300 md:py-2  py-1 px-4'>View More</button>
       </div>
    </div>
  )
}

export default exhibitor
