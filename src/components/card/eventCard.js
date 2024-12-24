import React from 'react'

//icons
import { FaClock } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineBroadcastOnPersonal } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { IoIosSend } from "react-icons/io";


function eventCard({ img, time, date, mode, name, place, desc}) {
  return (
    <div className='container flex flex-col shadow-lg mb-[5%]  md:h-[30em] md:w-[30em]'>
   <div className='flex basis-[50%]'>
      <img src={img} className="md:bg-cover "/>
      </div>
      <div className='flex flex-col basis-[45%] gap-1 px-5 py-4'>
       <div className='flex justify-between'>
        <p className='flex items-center gap-1'><FaClock />{time}</p>
        <p className='flex items-center gap-1'><FaCalendarAlt />{date}</p>
        <p className='flex items-center gap-1'><MdOutlineBroadcastOnPersonal/>{mode}</p>
      </div >
      <p className='md:text-[20px] font-semibold'>{name}</p>
      <p  className='flex items-center gap-1'><ImLocation2/>{place}</p>
      <p className='description'>{desc}</p>
      <button className='flex items-center w-[7rem] gap-1 px-2 h-[2rem] bg-[#F7A600] '><IoIosSend />Apply Now</button>
    </div>
    </div>
  )
}

export default eventCard;
