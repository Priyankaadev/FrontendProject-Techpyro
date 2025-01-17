"use client"

import React, { useEffect, useState } from 'react'

import Section1 from '@/content/dedicatedUpcomingEvent/section1'
import Section2 from '@/content/dedicatedUpcomingEvent/section2'
import Section3 from '@/content/dedicatedUpcomingEvent/section3'
import { useParams } from 'next/navigation'
import { upcomingEv } from '@/constant/upcomingEvents'
import { event } from '@/mocks/event'

function page() {

  const params = useParams()
  console.log(params);
  
  // const [item, setItem] = useState(upcomingEv.find((maping)=>maping.idx === params.id))

  const [speakers, setSpeakers ] = useState([])
  const [upcomingEvDetails, setUpcomingEvDetails] = useState()



  useEffect(()=>{

    const fetchSpeakers = async () => {
      try { 
        const response = await event.speakersList();
        const list = response?.data?.data || []
        console.log("response : ",list);   

        if (list) {
          // console.log("inside the if cond");       
          setSpeakers(list);
          
        } else {
         console.log("can't fetch speakers");
         
        }
      } catch (err) {
        console.log("Error fetching speakers:", err);
      }
    }
    const fetchEvents = async  () => {
      try {
        const response = await event.eventList({query:{"_id":params.id}, sort:{name:1},populate:'eventId',page:1,limit:10});
        console.log("api Response for id:", response);
        const details = response?.data?.data[0] || null
        console.log(details);

        if (details) {
          console.log("inside the if cond");       
          setUpcomingEvDetailst(details);
          
          
        } else {
         console.log("can't fetch details");
         
        }
      } catch (error) {
        console.log('error is',error)
      }

    }
    fetchSpeakers()
    fetchEvents()

  },[])
  
  return (

   <>
   <Section1 eventData={upcomingEvDetails} />
   <Section2 speakerData={ speakers } eventData={upcomingEvDetails} />
   <Section3/>

   </>
  )
}

export default page
