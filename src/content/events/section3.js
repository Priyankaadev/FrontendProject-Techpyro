"use client"
import Heading from "@/components/heading/heading";
import React, { useEffect, useState } from "react";

//components
import EventCard from "@/components/card/eventCard";
import {event} from "@/mocks/event"

//react icons
import { FaAngleDoubleRight } from "react-icons/fa";

function section3() {

  const [isOpen, setIsOpen] = useState("upcomingEvents")
  const [eventList, setEventList] = useState({
    upcomingEvents: [],
    pastEvents: []
  })
 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await event.eventList();
        console.log("api Response:", response);

        const currentDate = new Date(); 

        //upcomingEvents
        const upcomingEv = response?.data?.data.filter((event) => {
          const eventDate = new Date(event.eventId.date); 
          return eventDate >= currentDate; 
        }) || [];

        const pastEv = response?.data?.data.filter((event) => {
          const eventDate = new Date(event.eventId.date)
          return eventDate < currentDate
        }) || [];

        setEventList({
          upcomingEvents: upcomingEv,
          pastEvents: pastEv
        })

        console.log("Filtered upcoming events:", upcomingEv[0].image);
        console.log("Filtered past events:", pastEv);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  console.log( 'eventList', eventList);
  console.log('isOpen', isOpen);
  
  

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
          <button className={` ${isOpen ==="upcomingEvents" ? "bg-[#F7A600] py-2 px-4" : "bg-white py-2"} `} onClick={()=>setIsOpen("upcomingEvents")}>Upcoming Events</button>
          <button className={` ${isOpen ==="pastEvents" ? "bg-[#F7A600] py-2 px-4" : "bg-white py-2"}`} onClick={() => setIsOpen("pastEvents")} >
            Past Events</button>
        </div>

        <div className="row1 flex flex-col px-[4%] relative justify-center md:grid md:grid-cols-2 md:grid-flow-row md:gap-10 md:px-[5%]  ">
          {isOpen && eventList[isOpen].length > 0 ? eventList[isOpen].map((event) => (
            <EventCard
              idx={event.eventId._id}
              img={event.image}
              place={event.eventId.city}
              date={event.eventId.date}
              desc={event.description}
              name={event.eventId.name}
              type={`${isOpen}`}
            />
          ))  : <p>Data not found</p>
          }
          
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
