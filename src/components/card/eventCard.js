"use client"

import React from 'react'

//icons
import { FaClock } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineBroadcastOnPersonal } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { IoIosSend } from "react-icons/io";
import { useRouter } from 'next/navigation';



function eventCard({ img, time, date, mode, name, place, desc, idx,type}) {
  const router = useRouter()
  return (
    <div className='w-full flex flex-col shadow-lg mb-[7%] '>
   <div className='flex basis-[40%]'>
      <img src={img} className="md:bg-cover "/>
      </div>
      <div className='flex flex-col basis-[45%] gap-1 px-5 py-4'>
       <div className='flex gap-[5%]'>
        <p className='flex items-center gap-1 text-[8px] md:text-[15px]'><FaClock />{time}</p>
        <p className='flex items-center gap-1 text-[8px] md:text-[15px]'><FaCalendarAlt />{date}</p>
        <p className='flex items-center gap-1 text-[8px] md:text-[15px]'><MdOutlineBroadcastOnPersonal/>{mode}</p>
      </div >
      <p className='md:text-[20px] font-semibold'>{name}</p>
      <p  className='flex items-center gap-1 md:text-[18px]'><ImLocation2/>{place}</p>
      <p className='description md:text-[18px]'>{desc}</p>
     
      <button 
      className='flex items-center w-[7rem] gap-1 px-2 h-[2rem] bg-[#F7A600] '  
     onClick={()=>router.push(`/events/${type}/${idx}`)
     }
      
      >
        <IoIosSend />Apply Now</button>
    </div>
    </div>
  )
}

export default eventCard;
