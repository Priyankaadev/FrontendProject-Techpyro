'use client'
import Heading from "@/components/heading/heading";
import React, { useEffect, useState } from "react";
import { event } from "@/mocks/event";

//components
import EventCard from "@/components/card/eventCard";

//constant js file
import { upcomingEv } from "@/constant/upcomingEvents";
import { useParams } from "next/navigation";

function page() {

  const [upcomingList, setUpcomingList] = useState([])
  

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await event.eventList({query:{}, sort:{name:1},populate:'eventId',page:1,limit:50});
        console.log("api Response:", response);

        const currentDate = new Date(); 

        //upcomingEvents
        const upcomingEv = response?.data?.data.filter((event) => {
          const eventDate = new Date(event.eventId.date); 
          return eventDate >= currentDate; 
        }) || [];

        setUpcomingList( upcomingEv)
     
        console.log("Filtered upcoming:" , upcomingList);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className=" flex flex-col   items-center w-full mt-8 ">
      <Heading
        head={"Upcoming Events"}
        body={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
        }
      />
 
    <div className="row1 flex flex-col py-10 px-[4%]  md:grid md:grid-cols-2 md:px-[2%] md:gap-5  ">
        {upcomingList? upcomingList.map((event) => (
          <EventCard
            idx={event?.id}
            // mode={item.mode}
            img={event?.image}
            place={event?.eventId?.city}
            date={event?.eventId?.date}
            desc={event?.description}
            // time={item.time}
            name={event?.name}
            type={"upcomingEvents"}
          />
        )): <p>Data not found</p>}
      </div>
       
     
    </div>
  );
}

export default page;
