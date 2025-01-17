"use client";
import React, { useEffect, useState } from "react";

import Section1 from "@/content/dedicatedPastEvent/section1";
import Section2 from "@/content/dedicatedPastEvent/section2";
import Section3 from "@/content/dedicatedPastEvent/section3";
//next imports
import { useParams } from "next/navigation";
//mock import
import { event } from "@/mocks/event";
// import { upcomingEv } from '@/constant/upcomingEvents'

function page() {
  const params = useParams();
  console.log(params);

  const [pastEvDetails, setPastEvDetails] = useState();
  // const [item, setItem] = useState(upcomingEv.find((maping)=>maping.idx === params.id))

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await event.eventList({
          query: { _id: params.id },
          sort: { name: 1 },
          populate: "eventId",
          page: 1,
          limit: 10,
        });
        console.log("api Response for id:", response);
        const details = response?.data?.data[0] || null;

        if (details) {
          setPastEvDetails(details);
        } else {
          console.log("details not found");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <>
      <Section1 eventDetails={pastEvDetails} />
      <Section2 eventDetails={pastEvDetails}/>
      <Section3 />
    </>
  );
}

export default page;
