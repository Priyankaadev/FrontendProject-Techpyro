import React from "react";


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


const header = () => {
  return (
    <div className="container md:h-[30vh] md:w-[100wh]  h-[15vh] w-[100%] flex-shrink-0 px-8 mt-5 gap-[3rem] flex text-sm ">
      <div className="logo-container flex  basis-1/3 ">
        <img  src="/header/logo.png" className="logo-img  md:h-[4rem] md:w-[12rem] h-[2rem] w-[6rem] " />
      </div>

      <div className="row flex basis-2/3  ">
      <div className="md:hidden flex justify-around  h-[100%] w-[100%]">
        <IoSearch fontSize={28}  />
        <RiAccountCircleFill fontSize={26} />
        <CgMenuRight fontSize={26} />
      </div>
     
      <div className="hidden md:block w-full max-w-[800px] overflow-hidden ">
        <div className="row-1  flex justify-between mb-2  ">
          <div className="items md:text-[12px] lg:text-[15px] flex gap-[1rem] ">
            <p>Contact</p>
            <p>Resource</p>
            <p> <Link href="/aboutus">About</Link></p>
            <p>Menu item</p>
            <p>Menu item</p>
          </div>
          <ul className="icons flex gap-[1rem] ">
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
              {" "}
              <FaLinkedinIn />
            </li>
          </ul>
        </div>
        <hr  className="md:block hidden"/>
        <div className="row-2  flex justify-between gap-4 flex-shrink-0 items-center ">
          <div className="dropdown-items flex lg:shrink-0 shrink lg:gap-3 gap-2 mt-2 lg:text-[14px]  md:text-[12px] ">
            <DropdownMenu>
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
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                {/* <DropdownMenuSeparator /> */}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-1 " >Events<MdOutlineArrowDropDown /></DropdownMenuTrigger>
              <DropdownMenuContent >
                <DropdownMenuLabel><Link href="/events">Upcoming Events</Link></DropdownMenuLabel>
                <DropdownMenuLabel>Past Events</DropdownMenuLabel>
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
       <hr className="hidden" />
      </div> 
      
    </div>
   
  );
};

export default header;
