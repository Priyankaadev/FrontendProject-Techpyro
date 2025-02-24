"use client"

import React from 'react'

//icons
import { FaClock } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineBroadcastOnPersonal } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { IoIosSend } from "react-icons/io";
import { useRouter } from 'next/navigation';



function EventCard({ img, date, name, place, desc, idx,type}) {
  const router = useRouter()
  return (
    <div className=' flex flex-col shadow-lg  ' key={idx}>
  
      <img src={img} className=" flex  object-cover h-[20rem] " alt='event image'   onClick={()=>router.push(`/events/${type}/${idx}`)
     }/>
     
      <div className='flex flex-col   gap-1 px-5 py-4'>
       <div className='flex '>
        {/* <p className='flex items-center gap-1 text-[1rem] md:text-[15px]'><FaClock />{time}</p> */}
        <p className='flex items-center gap-1 text-[1rem] md:text-[15px]'><FaCalendarAlt />{date}</p>
        {/* <p className='flex items-center gap-1 text-[1rem] md:text-[15px]'><MdOutlineBroadcastOnPersonal/>{mode}</p> */}
      </div >
      <p className='md:text-[20px] font-semibold'>{name}</p>
      <p  className='flex items-center gap-1 md:text-[18px]'><ImLocation2/>{place}</p>
      <p className='description md:text-[18px]'>{desc}</p>
      </div>
      <div className=' flex items-baseline py-4 px-5'>
      <button 
      className='flex items-center p-2 w-[7rem] gap-1 h-[2rem] bg-[#F7A600] '  
     onClick={()=>router.push(`/dashboard/events/${type}/${idx}`)
     }
      
      >
        <IoIosSend />{type==="upcomingEvents" ?  "Apply Now": "View More" }</button>
        </div>
   
    </div>
  )
}

export default EventCard;
