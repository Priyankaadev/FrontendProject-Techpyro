import React from "react";

//components
import DedicatedEventCard from "@/components/card/dedicatedEventCard";


function Section1({eventDetails}) {

  return (
        
     <DedicatedEventCard
        idx={eventDetails?.id}
        img={eventDetails?.image}
        date={eventDetails?.eventId?.date}
        name={eventDetails?.title}
        place={eventDetails?.eventId?.city}
        desc={eventDetails?.description}
      />
  )
}

export default Section1;
