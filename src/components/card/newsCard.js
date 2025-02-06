import React from 'react'

//icons
import { FaAngleDoubleRight, FaCalendarAlt } from "react-icons/fa";


function NewsCard({ img, date, name, desc}) {
  return (
    <div className='w-full flex flex-col shadow-lg mb-[5%]   '>
    <div className='flex '>
       <img src={img} className="bg-cover w-full h-auto "/>
       </div>

       <div className='flex flex-col  gap-1 px-5 py-4'>
       
         <p className='flex items-center gap-1'><FaCalendarAlt />{date}</p>
   
       <p className='md:text-[20px] font-semibold'>{name}</p>
       <p className='description '>{desc}</p>
       <button className='flex items-center w-[7rem] gap-1 px-2 h-[2rem] bg-[#F7A600] '>Read More <FaAngleDoubleRight /></button>
     </div>
     </div>
  )
}

export default NewsCard

