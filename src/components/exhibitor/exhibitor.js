
import { useParams, useRouter } from 'next/navigation'
import React from 'react'


function Exhibitor({img, name, stall, hall,idx,id }) {

  const router = useRouter()
  const params = useParams()
  
  return (
    <div className='w-full flex flex-col shadow-lg ' key={id}>
        <img src={img} alt='exhibitor Image' className=' ' />
        <p className='text-[15px] md:text-[20px] font-semibold p-1'>{name}</p>
        <div className='flex flex-col text-[12px] md:text-[15px] p-2 '>
            <p>Stall : {stall}</p>
            <p>Hall : {hall}</p>
        </div>
        <div className='button-div'>
     <button 
     onClick={()=>router.push(`${params.id}/${idx}`)}
        className='bg-orange-300 md:py-2 py-1 px-4 md:px-2 mb-4 ml-2'
        
        >View More</button>
       </div>
    </div>
  )
}

export default Exhibitor
