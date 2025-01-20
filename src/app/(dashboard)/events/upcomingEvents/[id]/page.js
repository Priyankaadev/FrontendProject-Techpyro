"use client"

import React, { useEffect, useState } from 'react'

import Section1 from '@/content/dedicatedUpcomingEvent/section1'
import Section2 from '@/content/dedicatedUpcomingEvent/section2'
import Section3 from '@/content/dedicatedUpcomingEvent/section3'
import { useParams } from 'next/navigation'
// import { upcomingEv } from '@/constant/upcomingEvents'
import { event } from '@/mocks/event'

function page() {

  const params = useParams()
  console.log(params);
  
  // const [item, setItem] = useState(upcomingEv.find((maping)=>maping.idx === params.id))

  const [speakers, setSpeakers ] = useState([])
  const [upcomingEvDetails, setUpcomingEvDetails] = useState(null)
    const [committeeList, setCommitteeList] = useState([])
    const [delegateList, setDelegateList] = useState([]);

  useEffect(()=>{

    const fetchSpeakers = async () => {
      try { 
        const response = await event.speakersList({query:{}, sort:{name:1}, populate:"eventId", limit:10, page:1});
        const list = response?.data?.data || []
        // console.log("response : ",list);   

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

    const fetchCommittee = async () =>{
      try {
          
          const response = await event.CommitteeList({limit:50, sort:{name:1}, populate:"eventId", query:{}, page:1  })
          const list = response?.data?.data || []

          console.log(list);
          
          if(response){
            setCommitteeList(response?.data?.data) 
          
          }else{
            console.log("error in fetching committee");
            
          }
       
     } 
      catch (error) {
          console.log("error", error);
          
      }

    }

     const fetchDelegates = async () => {
          try { 
            const response = await event.DelegatesList({
              query: {},
              sort: { name: 1 },
              populate: "eventId",
              page: 1,
              limit: 50,
            });
            const list = response?.data?.data || []
            if (response) {
              setDelegateList(list);
              // console.log(list);
              
    
            } else {
              console.log("err");
            }
          } catch (error) {
            console.log("error while fetching delegates", error);
          }
        }
       
    
    const fetchEvents = async  () => {
      try {
        const response = await event.eventList({query:{"_id":params.id}, sort:{name:1},populate:'eventId',page:1,limit:10});
        // console.log("api Response for id:", response);
        const details = response?.data?.data[0] || null
        // console.log("details",details);

        if (details) {
          console.log("inside the if cond");       
          setUpcomingEvDetails(details);
          // console.log("upcomdetails",upcomingEvDetails);
          
          
        } else {
         console.log("can't fetch details");
         
        }
      } catch (error) {
        console.log('error is',error)
      }

    }
    fetchSpeakers()
    fetchEvents()
    fetchCommittee()   
    fetchDelegates();

  },[])
  
  return (

   <>
   <Section1 eventData={upcomingEvDetails} />
   <Section2 speakerData={ speakers } committeeData={committeeList} delegateData={delegateList} eventData={upcomingEvDetails} />
   <Section3/>

   </>
  )
}

export default page
