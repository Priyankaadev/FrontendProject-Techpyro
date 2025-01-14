"use client"

import React, { useContext, useEffect, useRef, useState } from "react";

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
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/authContext";


const header = () => {
  const router = useRouter();

  const {userInfo, handleLogout} = useContext(AuthContext)
  const [showInput, setShowInput] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null); // Tracks the currently open dropdown
  const [menuOpen, setMenuOpen] = useState(false)

  const handleDropdownToggle = (dropdownId) => {
    // Toggle the dropdown or close all if clicked again
    setOpenDropdown((prev) => (prev === dropdownId ? null : dropdownId));
  };



  const handleNav = ()=>{
    setMenuOpen(!menuOpen)
    console.log("clicked");
    
  }
  const handleSearch = ()=>{
   
    console.log("clicked");
    setShowInput(!showInput);
    
  }

  return (
    <div className="w-full md:h-[20vh]  h-[15vh]  flex-shrink-0 px-8 lg:mt-5 md:gap-[3rem] gap-[1rem] flex text-sm overflow-hidden">
     
      {/* Logo */}
      <div className="logo flex lg:mb-2 basis-1/3  items-center  ">
        <img onClick={()=> router.push('/')} src="/header/logo.png" className="logo-img  md:h-[4rem] md:w-[12rem] h-[2.5em] w-[6.5em]  " />
      </div>
      
      {/* right side content */}
      <div className="row flex basis-2/3  ">

      {/* sm, md */}
      <div className="lg:hidden items-center flex justify-around  h-[100%] w-[100%]">
       
         <IoSearch  fontSize={25} onClick={handleSearch}  className={
          menuOpen ? "hidden" : "flex" && showInput? "hidden" :"flex" 
          }  />
    
          {showInput && (
        <form  className="flex items-center ">
          <input
           
            type="text"
            placeholder="Search..."        
            className="border border-gray-300 rounded-lg p-1 w-[85%] focus:outline-none focus:ring focus:ring-blue-500 md:w-[100%]"
          />
          
        </form>
      )}
       
      <RiAccountCircleFill fontSize={25} className={ menuOpen ? "hidden" : "flex" }
      onClick={userInfo? ()=>{router.push('/profile')} : ()=>{router.push('/signin')}}
      />
      
        <CgMenuRight fontSize={25} onClick={handleNav}  className={
          menuOpen ? " ml-[50%]" : ""
        } />
      </div>

      <div className={
        menuOpen ? "fixed left-0 top-0 w-[65%] h-screen bg-[#ecf0f3] p-6 ease-in duration-500" 
        : "fixed left-[-100%] top-0 p-10 ease-in duration-400"
      }>
        <div className="flex w-full items-center justify-between ">
          
      <img onClick={()=> router.push('/')} src="/header/logo.png" className="logo-img  md:h-[4rem] md:w-[12rem] h-[2.5em] w-[6.5em]  " />
      <IoMdCloseCircleOutline fontSize={28} onClick={handleNav} className="cursor-pointer  " />
      </div>

     {/* listed nav Items */}

        <div className="flex flex-col py-2 md:text-[27px] ">
        
          <ul onClick={handleNav}>
            <Link href='/'>
            <li className="py-2 md:py-5 cursor-pointer">
              About
            </li>
            </Link>
            <Link href='/contact'>
            <li className="py-2 md:py-5 cursor-pointer">
             Contact
            </li>
            </Link>
            <Link href='/'>
            <li className="py-2 md:py-5 cursor-pointer">
              Resource
            </li>
            </Link>
            <Link href='/events'>
            <li className="py-2 md:py-5 cursor-pointer">
              Events
            </li>
            </Link>
            <Link href='/careers'>
            <li className="py-2 md:py-5 cursor-pointer">
              Careers
            </li>
            </Link>
            <Link href='/news'>
            <li className="py-2 md:py-5 cursor-pointer">
              News
            </li>
            </Link>
            <Link href='/press'>
            <li className="py-2 md:py-5 cursor-pointer">
              Media
            </li>
            </Link>
            <Link href='/'>
            <li className="py-2 md:py-5 cursor-pointer">
              Blogs
            </li>
            </Link>
          </ul>
          {/* icons */}
          <ul className="icons flex gap-3 py-3 ">
           
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

         <div  className="flex gap-4 py-3">
        <IoIosSettings fontSize={25}/>
         <IoMdLogOut fontSize={25} onClick={()=>handleLogout()}/>
         
         </div>
          
        </div>


      </div>

     {/* lg  */}
      <div className="hidden lg:block w-full  ">
        <div className="row-1  flex justify-evenly mb-2  ">
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
        <div className="row-2 flex xl:gap-8 md:gap-4 lg:justify-evenly flex-shrink-0 items-center  ">
          <div className="dropdown-items flex lg:shrink-0 shrink lg:gap-3 gap-2 mt-2 lg:text-[14px]  md:text-[12px] ">
            <DropdownMenu 
              open={openDropdown === "dropdown1"} // Check if this dropdown should be open
              onOpenChange={(isOpen) => handleDropdownToggle(isOpen ? "dropdown1" : null)}
            >
              <DropdownMenuTrigger className="flex gap-1 focus:outline-none ">Higher Education<MdOutlineArrowDropDown /></DropdownMenuTrigger>
              <DropdownMenuContent >
                <DropdownMenuLabel className='bg-white'>My Account</DropdownMenuLabel>
                {/* <DropdownMenuSeparator /> */}
              </DropdownMenuContent>
            </DropdownMenu>
            <p>School Education</p>
            <DropdownMenu
              open={openDropdown === "dropdown2"} // Check if this dropdown should be open
              onOpenChange={(isOpen) => handleDropdownToggle(isOpen ? "dropdown2" : null)}
            >
              <DropdownMenuTrigger className="flex gap-1 focus:outline-none">Media<MdOutlineArrowDropDown /></DropdownMenuTrigger>
              <DropdownMenuContent>
             <Link href='/videos'>  <DropdownMenuLabel className='bg-white'>Videos</DropdownMenuLabel></Link> 
             <Link href='/press'>  <DropdownMenuLabel className='bg-white'>Press Release</DropdownMenuLabel></Link> 
                {/* <DropdownMenuSeparator /> */}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu
              open={openDropdown === "dropdown3"} // Check if this dropdown should be open
              onOpenChange={(isOpen) => handleDropdownToggle(isOpen ? "dropdown3" : null)}
            >
              <DropdownMenuTrigger className="flex gap-1 focus:outline-none " >Events<MdOutlineArrowDropDown /></DropdownMenuTrigger>
              <DropdownMenuContent >
                <DropdownMenuLabel  className='bg-white'><Link href="/events/upcomingEvents">Upcoming Events</Link></DropdownMenuLabel>
                <DropdownMenuLabel className='bg-white'><Link href="/events/pastEvents">Past Events</Link></DropdownMenuLabel>
                {/* <DropdownMenuSeparator /> */}
              </DropdownMenuContent>
            </DropdownMenu>
         
          </div>
          <IoSearch fontSize={25} onClick={handleSearch}  className={
          menuOpen ? "hidden" : "flex" && showInput? "hidden" :"flex mt-2" 
          }  />
    
          {showInput && (
        <form  className="flex items-center ">
          <input
            type="text"
            placeholder="Search..."        
            className="border border-gray-300 rounded-lg p-1 w-[85%] focus:outline-none focus:ring focus:ring-blue-500 md:w-[100%]"
          />
          
        </form>
      )}
          {/* <IoSearch className=" h-7 w-5" /> */}

            <DropdownMenu
              open={openDropdown === "dropdown4"} // Check if this dropdown should be open
              onOpenChange={(isOpen) => handleDropdownToggle(isOpen ? "dropdown4" : null)}
            >
              <DropdownMenuTrigger className="flex gap-1 focus:outline-none ">


              {!userInfo && <button className="bg-[#F7A70D] flex  p-2 text-[10px]"  onClick={()=> router.push('/signin')}>
                <RiAccountCircleFill  className="h-5 w-5"/>{ "SIGN IN"}</button> }
            
            
            
              {userInfo?.full_name && <div>{userInfo?.full_name}</div>}
                <MdOutlineArrowDropDown /></DropdownMenuTrigger>
              <DropdownMenuContent>
             <DropdownMenuLabel className='bg-white' onClick={()=>router.push('/profile')}>My Account</DropdownMenuLabel>
                <DropdownMenuLabel className='bg-white' onClick={()=>handleLogout()}>Logout</DropdownMenuLabel>
                {/* <DropdownMenuSeparator /> */}
              </DropdownMenuContent>
            </DropdownMenu>
         
        </div>
     
      </div>

   </div> 
          
    </div>
   
  );
};

export default header;
