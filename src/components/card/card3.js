import React from 'react'

//icons
import { FaClock } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

function card3({time, date, mode, name, place, desc}) {
  return (
    <div className='container flex flex-col'>
      <img />
      <div className='flex'>
        <p><FaClock />{time}</p>
        <p><FaCalendarAlt />{date}</p>
        <p>{mode}</p>
      </div>
      <p>{name}</p>
      <p>{place}</p>
      <p>{desc}</p>
      <button>Apply Now</button>
    </div>
  )
}

export default card3
