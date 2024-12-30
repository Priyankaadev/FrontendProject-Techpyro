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
    <div className=" flex flex-col items-center ">
      <Heading
        head={"Events"}
        body={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
        }
      />

      <div className="events">
        <div className="toggle-button flex gap-2 px-[5%] py-[5%] justify-center">
          <button className="bg-[#F7A600] p-2">Upcoming Events</button>
          <button className="p-2">Past Events</button>
        </div>

        <div className="row1 flex flex-col px-[4%] relative justify-center  md:grid md:grid-cols-2 md:grid-flow-row md:gap-10 md:px-[5%]  ">
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
