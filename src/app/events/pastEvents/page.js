import Heading from "@/components/heading/heading";
import React from "react";

//components
import EventCard from "@/components/card/eventCard";

//constant js file
import { upcomingEv } from "@/constant/upcomingEvents";


function page() {
  return (
    <div className=" flex flex-col  mb-[10%] items-center  ">
    <Heading
      head={"Past Events"}
      body={
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
      }
    />
   
    <div className="row1 flex flex-col px-[4%]  md:grid md:grid-cols-2 md:px-[2%] md:gap-[5%]  ">
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

   
  </div>
  )
}

export default page
