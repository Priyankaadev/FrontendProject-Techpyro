'use client'
import Heading from "@/components/heading/heading";
import React, { useEffect, useState } from "react";
//components
import EventCard from "@/components/card/eventCard";

import { useSelector } from "react-redux";

function page() {
   const [pastList, setPastList] = useState([])
   const eventData = useSelector((state)=> state.event)
  
    useEffect(() => {
      const fetchEvents = async () => {
        try { 
          const currentDate = new Date(); 
          //upcomingEvents
        const pastEv = eventData.data.filter((event) => {
            const eventDate = new Date(event.eventId.date); 
            return eventDate < currentDate; 
          }) || [];
  
          setPastList(pastEv)

          console.log("Filtered upcoming:" , pastEv);
         
        } catch (err) {
          console.error("Error fetching events:", err);
        }};
  
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
    <div className="row1 flex flex-col px-[4%]  md:grid md:grid-cols-2 md:px-[5%] md:gap-8  ">
      {pastList? pastList.map((event) => (
        <EventCard
          idx={event?.id}
          img={event?.image}
          place={event?.eventId.city}
          date={event?.eventId.date}
          desc={event?.description}
          name={event?.eventId.name}
          type={"pastEvents"}
        />
      )) : <p>Data not found</p>}
      
    </div>   
  </div>
  
  )
}

export default page
