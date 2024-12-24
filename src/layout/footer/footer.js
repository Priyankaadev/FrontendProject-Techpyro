import React from "react";
//icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import Link from 'next/link';

function footer() {
  return (
    <div className="container p-[5%] mt-auto relative ">
    
        <div className="row-1 w-[100wh] mx-auto mt-5 flex-shrink-0 flex justify-between text-sm ">
        
        <div className="logo-container flex items-center basis-2/3  md:basis-[1/2]">
           <img  src="/header/logo.png" className="logo-img md:h-[4rem] md:w-[12rem] h-[3rem] w-[8rem] " />
           </div>

           <ul className="icons flex md:gap-5 sm:gap-3 gap-2 items-center">
            <li>
            {" "}
            <FaFacebookF fontSize={18} />
            </li>
           <li>
           
            <IoLogoInstagram fontSize={18}/>
           </li>
           <li>
          
            <FaXTwitter fontSize={18}/>
           </li> 
           <li>
            <FaLinkedinIn fontSize={18}/>
           </li>
           <li>
        
            <FaYoutube fontSize={18}/>
           </li>
         
         </ul>
      </div>
      <h3 className="mb-5 mt-5 text-[12px] tracking-wide  ">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore
       veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia 
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </h3>
      <hr />
      <div className="items flex py-5 gap-5 md:flex-row flex-col text-sm ">
        <p>About I-Gauge</p>
        <p>University Rating</p>
        <p>College Rating</p>
        <p>Subject Rating</p>
        <p>School Education</p>
        <p><Link href="/news" >News</Link></p>
        <p><Link href="/events" >Events</Link></p>
        <p>Blogs</p>
      </div>
      <hr />
      <div className="flex text-center md:flex-row flex-col md:justify-between mt-5 text-xs mb-[2%]">
       
      <ul className="flex gap-6 justify-between">
        <li>
            Cookies
        </li>
        <li>
            Privacy Policy
        </li>
        <li>
            Terms & Condition
        </li>
      </ul> 
      <div className="copyright ">
          <p>© 2024 QS Quacquarelli Symonds Limited. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default footer;
