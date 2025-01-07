import React, { useState } from "react";

//components
import DedicatedEventCard from "@/components/card/dedicatedEventCard";
import { upcomingEv } from "@/constant/upcomingEvents";

function section1({item}) {
  

  return (
   
      
        <DedicatedEventCard
          idx={item.idx}
          img={item.img}
          time={item.time}
          date={item.date}
          mode={item.mode}
          name={item.name}
          place={item.place}
          desc={item.desc}
        />
    
  );
}

export default section1;
