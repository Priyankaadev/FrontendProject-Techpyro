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

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const header = () => {
  return (
    <div className="container mx-auto px-8 mt-5 flex items-start justify-between text-sm ">
      <div className="logo-container h-[100%] w-[100%] basis-[40%]   ">
        <img src="/header/logo.png" className="logo-img h-[72px] w-[225px]" />
      </div>

      <div className="row  basis-[60%] ">
        <div className="row-1 gap-[20%] flex mb-2 ">
          <div className="items text-[14px] flex gap-10 ">
            <p>Contact</p>
            <p>Resource</p>
            <p>About</p>
            <p>Menu item</p>
            <p>Menu item</p>
          </div>
          <ul className="icons  flex gap-5 ">
            <li>
              {" "}
              <FaFacebookF />
            </li>
            <li>
              {" "}
              <IoLogoInstagram />
            </li>
            <li>
              {" "}
              <FaXTwitter />
            </li>
            <li>
              {" "}
              <FaYoutube />
            </li>
            <li>
              {" "}
              <FaLinkedinIn />
            </li>
          </ul>
        </div>
        <hr />
        <div className="row-2 flex justify-between gap-4 items-center ">
          <div className="dropdown-items flex gap-4 mt-3 text-[15px] ">
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
              <DropdownMenuTrigger className="flex gap-1">Events<MdOutlineArrowDropDown /></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
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
          <IoSearch className="h-8 w-6" />
          <button className="bg-[#F7A70D] flex py-4 px-4 "><RiAccountCircleFill  className="h-5 w-5"/>SIGN IN</button>
        </div>
     
       
      </div> 
      
    </div>
   
  );
};

export default header;
