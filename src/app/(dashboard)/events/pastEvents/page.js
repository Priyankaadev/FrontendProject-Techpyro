'use client'
import Heading from "@/components/heading/heading";
import React, { useEffect, useState } from "react";

//components
import EventCard from "@/components/card/eventCard";
import { event } from "@/mocks/event";


function page() {
   const [pastList, setPastList] = useState([])
  
    useEffect(() => {
      const fetchEvents = async () => {
        try {
          const response = await event.eventList({query:{}, sort:{name:1},populate:'eventId',page:1,limit:50});
          console.log("api Response:", response);
  
          const currentDate = new Date(); 
  
          //upcomingEvents
        const pastEv = response?.data?.data.filter((event) => {
            const eventDate = new Date(event.eventId.date); 
            return eventDate < currentDate; 
          }) || [];
  
          setPastList(pastEv)
  
          // console.log("Filtered upcoming events:", upcomingEv[0].image);
          // console.log("Filtered past events:", pastEv);
          console.log("Filtered upcoming:" , pastEv);
        } catch (err) {
          console.error("Error fetching events:", err);
        }
      };
  
      fetchEvents();
    }, []);
  

  return (
    <div className=" flex flex-col  mb-[10%] items-center  mt-8 ">
    <Heading
      head={"Past Events"}
      body={
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
      }
    />
   
    <div className="row1 flex flex-col px-[4%]  md:grid md:grid-cols-2 md:px-[2%] md:gap-5  ">
      {pastList? pastList.map((event) => (
        <EventCard
          idx={event?.id}
          // mode={item.mode}
          img={event?.image}
          place={event?.eventId.city}
          date={event?.eventId.date}
          desc={event?.description}
          // time={event?.time}
          name={event?.eventId.name}
          type={"pastEvents"}
        />
      )) : <p>Data not found</p>}
      
    </div>

   
  </div>
  )
}

export default page
