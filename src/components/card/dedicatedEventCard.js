import React from 'react'

//icons
// import { FaClock } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
// import { MdOutlineBroadcastOnPersonal } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";


function DedicatedEventCard({ img,date, name, place, desc,idx }) {
  
  return (
    <div className='w-full flex flex-col  md:flex-row mb-[5%] py-[1%]  ' key={idx}>
   <div className='flex flex-col md:flex-row basis-[40%] items-center '>
      <img src={img} className="h-[90%] w-full "/>
      </div>
      <div className='flex flex-col basis-[60%] gap-1 px-[5%] justify-center '>
       <div className='flex justify-between md:flex-shrink mt-2'>
        {/* <p className='flex items-center text-[10px] md:text-[12px] lg:text-[15px] gap-1'><FaClock />{time}</p> */}
        <p className='flex items-center text-[10px] md:text-[12px] lg:text-[15px] gap-1'><FaCalendarAlt />{date}</p>
        {/* <p className='flex items-center text-[10px] md:text-[12px] lg:text-[15px] gap-1'><MdOutlineBroadcastOnPersonal/>{mode}</p> */}
      </div >
      <p className='md:text-[20px] font-semibold'>{name}</p>
      <p  className='flex items-center gap-1'><ImLocation2/>{place}</p>
      <p className='description'>{desc}</p>
   
    </div>
    </div>
  )
}

export default DedicatedEventCard;
