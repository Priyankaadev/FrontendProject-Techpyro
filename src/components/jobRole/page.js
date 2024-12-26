"use client";

import React, { useState } from "react";
//react icons
import { ImLocation2 } from "react-icons/im";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FaAngleDoubleRight } from "react-icons/fa";

import Collapse from "../collapse/collapse";

function page({ title, place, desc }) {

  const [show, setShow] = useState(false);

  return (
    <div className="container flex flex-col gap-4 justify-center border-2 w-[30em] max-h-[65em] min-h-[20em] px-[4%] ">
      <p className="md:text-[20px] font-semibold">{title}</p>
      <p className="flex items-center gap-1">
        <ImLocation2 />
        {place}
      </p>
      <p className="description">{desc}</p>
      {show && <Collapse />}
      <div className="flex justify-between">
        <button className="bg-[#F7A600] flex gap-1 items-center p-1">
          Apply <FaAngleDoubleRight />
        </button>
        <p onClick={() => setShow(!show)} className="flex gap-1 items-center">
          Expand <MdKeyboardDoubleArrowUp />
        </p>
      </div>
    </div>
  );
}

export default page;