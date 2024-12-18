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
    <div className="container mx-auto px-8 py-5 flex items-start overflow: hidden;  justify-between text-sm ">
      <div className="logo-container h-[100%] w-[100%] basis-[40%]   ">
        <img src="/header/logo.png" className="logo-img h-[25%] w-[25%]" />
      </div>

      <div className="row  basis-[60%] ">
        <div className="row-1 justify-between flex mb-2 ">
          <div className="items flex gap-5 ">
            <p>Contact</p>
            <p>Resource</p>
            <p>About</p>
            <p>Menu item</p>
            <p>Menu item</p>
          </div>
          <ul className="icons flex gap-5 ">
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
        <div className="row-2 flex justify-between items-center ">
          <div className="dropdown-items flex gap-5 mt-3 ">
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
          <IoSearch className="h-7 w-5" />
          <button className="bg-orange-500 flex py-3 px-4 gap-1"><RiAccountCircleFill  className="h-5 w-5"/>SIGN IN</button>
        </div> 
       
      </div> 
      
    </div>
   
  );
};

export default header;
