import Heading from "@/components/heading/heading";
import React from "react";

//components
import EventCard from "@/components/card/eventCard";

//constant js file
import { upcomingEv } from "@/constant/upcomingEvents";

//react icons
import { FaAngleDoubleRight } from "react-icons/fa";

function section3() {
  return (
    <div className=" flex flex-col  mb-[10%] items-center  ">
      <Heading
        head={"Events"}
        body={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
        }
      />
     
      <div className="row1 flex flex-col px-[4%] relative justify-center  md:grid md:grid-cols-2 md:px-[5%] md:gap-[5%]  ">
        {upcomingEv.map((item) => (
          <EventCard
            mode={item.mode}
            img={item.img}
            place={item.place}
            date={item.date}
            desc={item.desc}
            time={item.time}
            name={item.name}
          />
        ))}
        
      </div>

      <div className="bottom-0 ">
          <button className="bg-[#F7A600] gap-1 py-2 flex justify-center items-center max-w-[10rem]  ">
            View More <FaAngleDoubleRight />
          </button>
        </div>
    </div>
  );
}

export default section3;
