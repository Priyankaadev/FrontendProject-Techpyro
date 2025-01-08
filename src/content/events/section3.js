"use client"
import Heading from "@/components/heading/heading";
import React, { useState } from "react";

//components
import EventCard from "@/components/card/eventCard";

//constant js file
import { upcomingEv } from "@/constant/upcomingEvents";

//react icons
import { FaAngleDoubleRight } from "react-icons/fa";

function section3() {

  const [isOpen, setIsOpen] = useState("upcomingEvents")

  

  return (
    <div className=" flex flex-col items-center ">
      <Heading
        head={"Events"}
        body={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
        }
      />

      <div className="events">
        <div className="toggle-button flex gap-2 px-[5%] py-[5%] justify-center">
          <button className={` ${isOpen ==="upcomingEvents" ? "bg-[#F7A600] py-2" : "bg-white py-2"} `} onClick={()=>setIsOpen("upcomingEvents")}>Upcoming Events</button>
          <button className={` ${isOpen ==="pastEvents" ? "bg-[#F7A600] py-2" : "bg-white py-2"}`} onClick={() => setIsOpen("pastEvents")} >
            Past Events</button>
        </div>

        <div className="row1 flex flex-col px-[4%] relative justify-center md:grid md:grid-cols-2 md:grid-flow-row md:gap-10 md:px-[5%]  ">
          {upcomingEv.map((item,idx) => (
            <EventCard
              idx={item.idx}
              mode={item.mode}
              img={item.img}
              place={item.place}
              date={item.date}
              desc={item.desc}
              time={item.time}
              name={item.name}
              type={`${isOpen}`}
            />
          ))}
        </div>

        <div className="flex justify-center items-center ">
          <button className="bg-[#F7A600] gap-1 p-2 flex justify-center items-center max-w-[10rem]  ">
            View More <FaAngleDoubleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default section3;
