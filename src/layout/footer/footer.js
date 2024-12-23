import React from "react";
//icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function footer() {
  return (
    <div className="container px-[60px] mt-[3%] overflow-hidden ">
      {/* <div className="row1 flex mb-5  justify-between ">
        <div className="logo-container h-[50%] w-[50%]  ">
          <img src="/header/logo.png" className="logo-img h-[72px] w-[225px]" />
        </div> */}
        <div className="row-1 h-[15vh] w-[100wh] mx-auto mt-5 flex gap-[10%] text-sm ">
      <div className="logo-container flex  basis-2/3  md:basis-[1/2]">
        <img  src="/header/logo.png" className="logo-img md:h-[3rem]  md:w-[8rem] h-[2em] w-[8em] " />
      </div>

        <ul className="icons flex gap-5 items-center">
          <li>
            {" "}
            <FaFacebookF fontSize={20} />
          </li>
          <li>
            {" "}
            <IoLogoInstagram fontSize={20}/>
          </li>
          <li>
            {" "}
            <FaXTwitter fontSize={20}/>
          </li> 
          <li>
            {" "}
            <FaLinkedinIn fontSize={20}/>
          </li>
          <li>
            {" "}
            <FaYoutube fontSize={20}/>
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
        <p>News</p>
        <p>Events</p>
        <p>Blogs</p>
      </div>
      <hr />
      <div className="flex text-center md:flex-row flex-col md:justify-between mt-5 text-xs mb-[5%]">
       
      <ul className="flex gap-6  mb-[5%] justify-between">
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
