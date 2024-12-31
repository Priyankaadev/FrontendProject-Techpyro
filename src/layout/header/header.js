"use client"
import React, { useState } from "react";


//icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { CgMenuRight } from "react-icons/cg";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';
import { useRouter } from "next/navigation";


const header = () => {
  const router = useRouter();
 
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="w-full md:h-[27vh]  h-[15vh]  flex-shrink-0 px-8 lg:mt-5 md:gap-[3rem] gap-[1rem] flex text-sm overflow-hidden">
      <div className="logo flex  basis-1/3 lg:mb-2 items-center ">
        <img onClick={()=> router.push('/')} src="/header/logo.png" className="logo-img  md:h-[4rem] md:w-[12rem] h-[2rem] w-[6rem]  " />
      </div>

      <div className="row flex basis-2/3  ">
      <div className="lg:hidden items-center flex justify-around  h-[100%] w-[100%]">
        <IoSearch fontSize={25}  />
        <RiAccountCircleFill fontSize={25} />
        <CgMenuRight fontSize={25} onClick={()=>{setToggleMenu(!toggleMenu)           
        }}/>
      </div>
     
      <div className="hidden lg:block w-full max-w-[800px] ">
        <div className="row-1  flex justify-between mb-2  ">
          <div className="items md:text-[12px] lg:text-[15px] flex gap-[1rem] ">
          <Link href="/contact">  <p>Contact</p></Link>
            <p>Resource</p>
            <p> <Link href="/aboutus">About</Link></p>
            <p><Link href="/careers">Careers</Link></p>
            <p><Link href="/press">Press Release</Link></p>
          </div>
          <ul className="icons flex gap-[1rem]  ">
           
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
        <hr  className="md:block hidden "/>
        <div className="row-2 flex xl:gap-8 md:gap-4 lg:justify-between flex-shrink-0 items-center  ">
          <div className="dropdown-items flex lg:shrink-0 shrink lg:gap-3 gap-2 mt-2 lg:text-[14px]  md:text-[12px] ">
            <DropdownMenu >
              <DropdownMenuTrigger className="flex gap-1">Higher Education<MdOutlineArrowDropDown /></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                {/* <DropdownMenuSeparator /> */}
              </DropdownMenuContent>
            </DropdownMenu>
            <p>School Education</p>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-1">Media<MdOutlineArrowDropDown /></DropdownMenuTrigger>
              <DropdownMenuContent>
             <Link href='/videos'>  <DropdownMenuLabel>Videos</DropdownMenuLabel></Link> 
             <Link href='/press'>  <DropdownMenuLabel>Press Release</DropdownMenuLabel></Link> 
                {/* <DropdownMenuSeparator /> */}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-1 " >Events<MdOutlineArrowDropDown /></DropdownMenuTrigger>
              <DropdownMenuContent >
                <DropdownMenuLabel><Link href="/events/upcomingEvents">Upcoming Events</Link></DropdownMenuLabel>
                <DropdownMenuLabel><Link href="/events/pastEvents">Past Events</Link></DropdownMenuLabel>
                {/* <DropdownMenuSeparator /> */}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-1">Thought Leadership<MdOutlineArrowDropDown /></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                {/* <DropdownMenuSeparator /> */}
              </DropdownMenuContent>
            </DropdownMenu>
         
          </div>
          
          <IoSearch className=" h-7 w-5" />
          <button className="bg-[#F7A70D] flex  p-2 text-[10px]"><RiAccountCircleFill  className="h-5 w-5"/>SIGN IN</button>
        </div>
     
      </div>

   </div> 
          
    </div>
   
  );
};

export default header;
