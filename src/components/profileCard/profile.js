import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io'

function profile({img, name, desc}) {
  return (
    <div className='container flex flex-col shadow-lg'>
      <div className='flex basis-[60%]  '>
      <img src={img} />
      </div>
      <div className='flex flex-col basis-[40%] p-5 '>
    <p>{name}</p>
    <p>{desc}</p>
    <ul className="icons flex gap-5 mt-2">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <IoLogoInstagram />
                </li>
                <li>
                  <FaXTwitter />
                </li>
                <li>
                  <FaYoutube />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
              </ul>
      </div>
    </div>
  )
}

export default profile
