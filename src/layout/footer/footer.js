import React from "react";
//icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function footer() {
  return (
    <div className="container px-[60px] mt-[5%] ">
      <div className="row1 flex mb-5  justify-between ">
        <div className="logo-container h-[50%] w-[50%]  ">
          <img src="/header/logo.png" className="logo-img h-[72px] w-[225px]" />
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
      <h3 className="mb-5 text-sm tracking-wide  ">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore
        <br /> veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia <br />
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </h3>
      <hr />
      <div className="items flex py-8 gap-8 text-sm ">
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
      <div className="flex justify-between mt-5 text-xs mb-3">
        <div className="copyright ">
          <p>© 2024 QS Quacquarelli Symonds Limited. All rights reserved.</p>
        </div>
      <ul className="flex gap-6 ">
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
      </div>
    </div>
  );
}

export default footer;
