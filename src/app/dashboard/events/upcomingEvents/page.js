'use client'
import Heading from "@/components/heading/heading";
import React, { useEffect, useState } from "react";
import { event } from "@/mocks/event";

//components
import EventCard from "@/components/card/eventCard";

//constant js file
import { upcomingEv } from "@/constant/upcomingEvents";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

function Page() {

  const [upcomingList, setUpcomingList] = useState([])
  const eventData = useSelector((state)=> state.event)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const currentDate = new Date();
        //upcomingEvents
        const upcomingEv = eventData.data.filter((event) => {
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
        {upcomingList? upcomingList.map((event, idx) => (
          <EventCard
          key={idx}
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

export default Page;
