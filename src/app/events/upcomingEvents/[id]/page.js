"use client"

import React, { useState } from 'react'

import Section1 from '@/content/dedicatedUpcomingEvent/section1'
import Section2 from '@/content/dedicatedUpcomingEvent/section2'
import Section3 from '@/content/dedicatedUpcomingEvent/section3'
import { useParams } from 'next/navigation'
import { upcomingEv } from '@/constant/upcomingEvents'

function page() {

  const params = useParams()
  console.log(params);
  
  const [item, setItem] = useState(upcomingEv.find((maping)=>maping.idx === params.id))
  
  return (

   <>
   <Section1 item={item} />
   <Section2 item={item}/>
   <Section3 item={item}/>

   </>
  )
}

export default page
