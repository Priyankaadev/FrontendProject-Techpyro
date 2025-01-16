"use client"

import React, { useEffect, useState } from 'react'

import Section1 from '@/content/dedicatedUpcomingEvent/section1'
import Section2 from '@/content/dedicatedUpcomingEvent/section2'
import Section3 from '@/content/dedicatedUpcomingEvent/section3'
import { useParams } from 'next/navigation'
import { upcomingEv } from '@/constant/upcomingEvents'
import { event } from '@/mocks/event'

function page() {

  // const params = useParams()
  // console.log(params);
  
  // const [item, setItem] = useState(upcomingEv.find((maping)=>maping.idx === params.id))

  const [speakers, setSpeakers ] = useState([])


  useEffect(()=>{

    const fetchSpeakers = async () => {
      try { 
        const response = await event.speakersList();
        const list = response?.data?.data || []
        console.log("response : ",list);   

        if (list) {
          console.log("inside the if cond");       
          setSpeakers(list);
          
        } else {
         console.log("can't fetch speakers");
         
        }
      } catch (err) {
        console.log("Error fetching speakers:", err);
      }
    }
    fetchSpeakers()
  },[])
  
  return (

   <>
   {/* <Section1 item={item} /> */}
   <Section2 speakerData={ speakers } />
   {/* <Section3 item={item}/> */}

   </>
  )
}

export default page
